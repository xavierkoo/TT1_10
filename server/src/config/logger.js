const winston = require("winston");
const { combine, timestamp, json, colorize, simple, prettyPrint } =
  winston.format;

const consoleTransport = new winston.transports.Console({
  format: combine(colorize(), simple()),
});

const infoFileTransport = new winston.transports.File({
  filename: "combined.log",
  level: "info",
  format: combine(timestamp(), prettyPrint()),
});

const errorFileTransport = new winston.transports.File({
  filename: "error.log",
  level: "error",
  format: combine(timestamp(), prettyPrint()),
});

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  defaultMeta: { service: "Global-Logger" },
  transports: [
    // Write all error logs to error.log
    errorFileTransport,
    // Write all info and higher-level logs to combined.log
    infoFileTransport,
    // Write all logs to the console
    consoleTransport,
  ],
});
// initializing logger in global objects
global.logger = logger;
module.exports = logger;
