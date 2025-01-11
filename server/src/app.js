const express = require("express");

const app = express();

// Enabling logging
require("./config/logger");
require("dotenv").config();

require("./config/init")(app);

const PORT = process.env.PORT;

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
