const mongoose = require("mongoose");
require("dotenv").config(); // To load environment variables
const dbURI = process.env.DATABASE_URI;

const dbconnect = () => {
  mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connection done.");
    })
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
};
module.exports = dbconnect;
