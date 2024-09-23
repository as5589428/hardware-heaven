const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8000
const path = require("path");
// var app = express();


app.use(express.json());
// const __dirname=path.dirname("")
const buildpath = path.join(__dirname,"../frontend/build")
app.use(express.static(buildpath));
// app.use(express.static(buildpath));
app.use("/test", (req, res) => {
  res.send("Hello world from app.js!");
});
app.use(cookieParser());
app.use(
  cors({
   "origin": "*", //Aws Server ip Frontend e.g 3000
    methods:["POST","GET"],   
    credentials: true,
  })
);


// app.use("/",express.static(path.join(__dirname, "./uploads")));
// app.use("/test", (req, res)=> {
//   res.send("Hello worlds!");
// });



app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// import routes
const user = require("./controller/user");
const shop = require("./controller/shop");
const product = require("./controller/product");
const event = require("./controller/event");
const coupon = require("./controller/coupounCode");
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

// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;
