# Node.js HTTP Static File Server - Notes

## Overview

A basic HTTP server that serves static files (HTML, CSS, JS, images) from the file system with proper MIME type handling and error responses.

## Required Modules

```javascript
const http = require("http"); // Creates HTTP server
const fs = require("fs"); // File system operations
const path = require("path"); // Path manipulation utilities
```

## Configuration

```javascript
const port = 3000; // Server port number
```

## MIME Types Mapping

```javascript
const mimeType = {
  ".html": "text/html", // HTML files
  ".css": "text/css", // Stylesheets
  ".js": "text/javascript", // JavaScript files
  ".png": "image/png", // PNG images
};
```

- **Purpose**: Tell browsers how to handle different file types
- **Fallback**: `"application/octet-stream"` for unknown extensions

## Server Creation & Request Handling

### Server Setup

```javascript
const server = http.createServer((req, res) => {
  // Request handling logic
});
```

- **`req`**: Incoming request object (contains URL, headers, etc.)
- **`res`**: Response object (used to send data back to client)

### File Path Resolution

```javascript
const filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);
```

- **`__dirname`**: Current script directory
- **`req.url`**: Requested URL path
- **Logic**: Root path ("/") serves index.html, otherwise serve requested file
- **`path.join()`**: Safely combines path segments

### Content Type Detection

```javascript
const extName = String(path.extname(filePath)).toLowerCase();
const contentType = mimeType[extName] || "application/octet-stream";
```

- **`path.extname()`**: Extracts file extension
- **`toLowerCase()`**: Ensures case consistency
- **Lookup**: Finds MIME type or uses default

## File Reading & Response Handling

### Asynchronous File Reading

```javascript
fs.readFile(filePath, (err, content) => {
  // Error handling and response logic
});
```

- **Non-blocking**: Server can handle other requests while reading file
- **Callback**: Executes when file operation completes

### Error Handling

```javascript
if (err) {
  if (err.code === "ENOENT") {
    // File not found - 404 error
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404: File Not Found</h1>");
  } else {
    // Other server errors - 500 error
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(`500: Server Error - ${err.code}`);
  }
}
```

- **ENOENT**: "Entity Not Found" - file doesn't exist
- **404 Status**: Standard HTTP "Not Found" response
- **500 Status**: "Internal Server Error" for other issues

### Success Response

```javascript
else {
  res.writeHead(200, { "Content-Type": contentType });
  res.end(content, "utf-8");
}
```

- **200 Status**: HTTP "OK" - successful response
- **Content-Type Header**: Tells browser how to handle the file
- **`res.end()`**: Sends file content and closes connection

## Server Startup

```javascript
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
```

- **Binds** server to specified port
- **Callback** runs when server is ready to accept connections

## Request Flow

1. **Client** requests URL (e.g., `http://localhost:3000/style.css`)
2. **Server** determines file path and content type
3. **File system** reads requested file asynchronously
4. **Response** sent based on operation result:
   - **Success**: File content with appropriate MIME type
   - **Not Found**: 404 error page
   - **Other Error**: 500 error message

## Usage Examples

```bash
# Start server
node server.js

# Browser requests:
http://localhost:3000/           → serves index.html
http://localhost:3000/style.css  → serves style.css (as CSS)
http://localhost:3000/app.js     → serves app.js (as JavaScript)
http://localhost:3000/logo.png   → serves logo.png (as image)
http://localhost:3000/missing    → shows 404 error
```

## Key HTTP Concepts

### HTTP Status Codes

- **200**: OK - Request successful
- **404**: Not Found - Resource doesn't exist
- **500**: Internal Server Error - Server-side problem

### HTTP Headers

- **Content-Type**: Specifies the media type of the response
- **Case-insensitive**: "Content-Type" = "content-type"

### Response Methods

- **`res.writeHead(statusCode, headers)`**: Sets status and headers
- **`res.end(data, encoding)`**: Sends response body and closes connection

## Benefits of This Approach

- **Simple**: Easy to understand and modify
- **Flexible**: Can serve any static file type
- **Educational**: Shows how web servers work fundamentally
- **Lightweight**: No external dependencies needed
