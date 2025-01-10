const express = require("express");
require("dotenv").config();
const app = express();
var cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// Enabling logging
require("./config/logger");

require("./config/init")(app);

const PORT = process.env.PORT;
console.log(process.env.DB_PASSWORD);

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
