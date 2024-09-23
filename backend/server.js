const app = require("./app");
const connectDatabase = require("./db/Database");
const cloudinary = require("cloudinary");




// app.use("/", (req, res) => {
//   res.send("Hello world from server.js");
// });
app.use(express.json());
// const __dirname=path.dirname("")
const buildpath = path.join(__dirname,"../frontend/build")
app.use(express.static(buildpath));
// app.use(express.static(buildpath));
app.use("/", (req, res) => {
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
// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}


// connect db
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


// create server

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`shutting down the server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
  
});
