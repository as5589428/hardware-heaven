const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// CORS Configuration
app.use(cors({
    origin: "*", // Replace with your frontend URL if needed
    methods: ["POST", "GET"],
    credentials: true,
}));

// Serve static files from the React app
const buildPath = path.join(__dirname, "../frontend/build");
app.use(express.static(buildPath));

// API Routes
const user = require("./controller/user");
const shop = require("./controller/shop");
const product = require("./controller/product");
const event = require("./controller/event");
const coupon = require("./controller/couponCode");
const payment = require("./controller/payment");
const order = require("./controller/order");
const conversation = require("./controller/conversation");
const message = require("./controller/message");
const withdraw = require("./controller/withdraw");

app.use("/api/v2/user", user);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/message", message);
app.use("/api/v2/order", order);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);
app.use("/api/v2/coupon", coupon);
app.use("/api/v2/payment", payment);
app.use("/api/v2/withdraw", withdraw);

// Error Handling Middleware
app.use(ErrorHandler);

// Start Server
const PORT = process.env.PORT || 8000; // Use environment variable for PORT
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle Uncaught Exceptions and Promise Rejections
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for handling uncaught exception`);
});

process.on("unhandledRejection", (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});

module.exports = app;
