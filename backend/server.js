const app = require("./app");
const dbconnect = require("./config/database");
dbconnect();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
