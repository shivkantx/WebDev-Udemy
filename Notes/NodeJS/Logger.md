# Node.js Event-Driven Logger - Complete Code Explanation & Notes

## What The Code Does

This code creates a **memory monitoring system** that tracks system memory usage every 3 seconds and logs all events to a file using an event-driven architecture.

## Step-by-Step Code Explanation

### 1. Imports and Setup

```javascript
const fs = require("fs");
const os = require("os");
const EventEmitter = require("events");
```

- **fs**: For file operations (writing logs)
- **os**: For system information (memory stats)
- **EventEmitter**: For creating event-driven communication

### 2. Custom Logger Class

```javascript
class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}
```

- Creates a custom `Logger` that inherits from `EventEmitter`
- The `log()` method doesn't directly write to files - instead it **emits an event**
- When you call `logger.log("something")`, it fires a "message" event with that text

### 3. File Writing Function

```javascript
const logFile = ".eventlog.txt";
const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
  fs.appendFileSync(logFile, logMessage);
};
```

- `logToFile` is the function that actually writes to the file
- It adds a timestamp in ISO format (like "2025-01-26T10:30:45.123Z")
- Uses `appendFileSync` to add new lines to `.eventlog.txt` without overwriting

### 4. Connecting Events to File Writing

```javascript
logger.on("message", logToFile);
```

- This line says: "Whenever the logger emits a 'message' event, run the `logToFile` function"
- This is the **event listener** that connects your logger to the file writer

### 5. Memory Monitoring Loop

```javascript
setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Current memory usage : ${memoryUsage.toFixed(2)}%`);
}, 3000);
```

- Runs every 3000 milliseconds (3 seconds)
- Calculates **free memory percentage**: (free memory ÷ total memory) × 100
- Logs this percentage (rounded to 2 decimal places)

### 6. Initial Log Messages

```javascript
logger.log("Application started");
logger.log("Application event occurred");
```

- Logs two startup messages when the application first runs

## How It All Works Together

1. **Application starts** → logs "Application started" and "Application event occurred"
2. **Every 3 seconds** → calculates free memory percentage and logs it
3. **Each time `logger.log()` is called** → emits a "message" event
4. **Event listener catches the event** → `logToFile` function runs
5. **Log entry gets written** to `.eventlog.txt` with timestamp

## Example Output in `.eventlog.txt`

```
2025-01-26T10:30:45.123Z - Application started
2025-01-26T10:30:45.124Z - Application event occurred
2025-01-26T10:30:48.125Z - Current memory usage : 67.45%
2025-01-26T10:30:51.126Z - Current memory usage : 67.32%
```

## Core Components

## Technical Deep Dive

### Logger Class Details

- **Inheritance**: Extends EventEmitter to get event functionality
- **Purpose**: Custom logger that emits log events instead of directly writing
- **Key Method**: `log(message)` - Emits a 'message' event with the provided message
- **Design Pattern**: Observer pattern implementation using EventEmitter

### File Logging Function Details

- **Purpose**: Event handler that writes log messages to `.eventlog.txt`
- **Features**:
  - ISO timestamp formatting
  - Synchronous file append operations
  - Structured log format: `[TIMESTAMP] - [MESSAGE]`
- **File Location**: `.eventlog.txt` (hidden file in current directory)

### Memory Monitoring System Details

- **Purpose**: Continuous memory usage monitoring
- **Functionality**:
  - Runs every 3 seconds (3000ms)
  - Calculates free memory percentage
  - Logs formatted memory usage with 2 decimal precision
- **Formula**: `(os.freemem() / os.totalmem()) * 100`

## Key Concepts & Patterns

### Event-Driven Architecture

- **Emitter**: Logger class emits 'message' events
- **Listener**: `logToFile` function listens for 'message' events
- **Decoupling**: Log message generation is separated from log handling
- **Key Insight**: The logger doesn't directly write to files, but instead emits events that other parts of the system can listen to and respond to

### Memory Calculation Formula

```
Memory Usage % = (Free Memory / Total Memory) × 100
```

- **Higher percentage** = More free memory available
- **Lower percentage** = Less free memory available
- **Note**: Formula shows free memory ratio, not used memory ratio

### File Operations

- **Method**: `fs.appendFileSync()` for synchronous file appending
- **Format**: Each log entry on a new line with timestamp
- **Trade-off**: Blocks event loop but ensures immediate file write

## Application Flow & Execution

1. **Initialization Phase**

   - Logger instance created: `const logger = new Logger();`
   - Event listener registered: `logger.on("message", logToFile);`
   - Memory monitoring interval started with `setInterval()`

2. **Startup Logging**

   - Logs "Application started" message
   - Logs "Application event occurred" message

3. **Continuous Operation**

   - Every 3 seconds: calculates free memory percentage
   - Every 3 seconds: logs memory usage report
   - All events written to `.eventlog.txt` with timestamps

4. **Event Processing Flow**
   - `logger.log()` called → Emits 'message' event → `logToFile` handler executed → File updated

## Technical Notes

### Synchronous vs Asynchronous

- Uses `fs.appendFileSync()` - **synchronous operation**
- **Trade-off**: Blocks event loop but ensures immediate file write
- **Alternative**: Could use `fs.appendFile()` for non-blocking operation

### Memory Usage Interpretation

- **Higher percentage** = More free memory available
- **Lower percentage** = Less free memory available
- **Formula shows free memory ratio**, not used memory ratio

### Error Handling

- **Current state**: No explicit error handling
- **Potential issues**: File permission errors, disk space limitations
- **Improvement**: Add try-catch blocks around file operations

## Use Cases

- **System monitoring**: Track memory usage over time
- **Debugging**: Event-driven logging for application diagnostics
- **Performance analysis**: Memory usage patterns identification
- **Audit trail**: Timestamped log entries for application events

## Potential Enhancements

- Add log levels (INFO, WARN, ERROR)
- Implement log rotation for large files
- Add async file operations with error handling
- Include additional system metrics (CPU, disk usage)
- Add configuration options for log format and intervals
