require("dotenv").config();

const app = require("./app");
const port = require("./config/express").port;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
