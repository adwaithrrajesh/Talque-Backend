const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");


// Configuring port
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

// Configuring necessary modules
app.use(express.json());
app.use(morgan("dev"));

// Configuring Cors
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);




// Starting server
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});