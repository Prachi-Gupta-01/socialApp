const express = require("express");
const app = express();
const cookieParser = require("cookie-parser"); // to get token from cookie (parse)
require("dotenv").config({ path: "backend/config/config.env" });

//using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//importing route
const post = require("./routes/post");
const user = require("./routes/user");

//using routes
app.use("/api/v1", post);
app.use("/api/v1", user);
module.exports = app;
