const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
//import routes
const authRoutes = require("./src/routes/auth");
const portfolioRoutes = require("./src/routes/portfolio");
const { db } = require("./src/models/User");
//app
const app = express();

//test
const bcrypt = require("bcrypt");

const plaintextPassword = "test123";
const bcryptHash =
  "$2b$10$b7/LsKzlnmKdkKc7aoEYS.qXnP3Uv55/9iaQSXQ7FsmFqF.8N//wK";

bcrypt.compare(plaintextPassword, bcryptHash).then((isMatch) => {
  if (!isMatch) {
    console.log("false");
  } else {
    console.log("true");
  }
});

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));
//middlewares
app.use(bodyParser.json());
app.use(cors());
//routes middleware
app.use("/api", authRoutes);
app.use("/api", portfolioRoutes);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
