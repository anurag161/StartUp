const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");
const cors = require("cors");
const Razorpay = require("razorpay");
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
//   })
// );

// Handling Uncaught Exception

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  process.exit(1);
});

//razorpay payment
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_ID_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on "http://localhost:${process.env.PORT}"`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});

module.exports = instance;
