const fs = require("fs");
const os = require("os");
const EventEmitter = require("events");

// Logger class to emit log messages as events
class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

const logger = new Logger();
const logFile = ".eventlog.txt";

// Function to write log messages to a file
const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
  fs.appendFileSync(logFile, logMessage);
};

// Listener for 'message' events
logger.on("message", logToFile);

setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Current memory usage : ${memoryUsage.toFixed(2)}%`);
}, 3000);

// Emit initial log events
logger.log("Application started");
logger.log("Application event occurred");
