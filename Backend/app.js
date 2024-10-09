const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Mongoose connection
mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log("Connected to MongoDB server");
}).catch(err => console.error(err));

// Import the router
const userRouter = require("./routes/userroute");
app.use("/todos", userRouter); // Use /todos as the base path for todo routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
