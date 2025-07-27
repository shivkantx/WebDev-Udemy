# Server Implementation Documentation

## 📋 Overview

This documentation covers two different server implementations that provide similar functionality using different JavaScript runtimes and approaches. Both servers handle basic routing with home and login endpoints.

---

## 🚀 Bun.js HTTP Server

### Description

A modern, high-performance HTTP server implementation using Bun's native `serve` function. Bun is a fast JavaScript runtime that provides built-in server capabilities with excellent performance characteristics.

### Code Implementation

```javascript
import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello welcome to home by bun", { status: 200 });
    } else if (url.pathname === "/login") {
      return new Response("Welcome to login page by bun", { status: 200 });
    } else {
      return new Response("404 Not Found", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
```

### Code Explanation

**Line-by-Line Breakdown:**

```javascript
import { serve } from "bun";
```

- Imports the `serve` function from Bun's built-in HTTP module using ES6 import syntax

```javascript
serve({
```

- Calls the `serve` function with a configuration object to start the HTTP server

```javascript
  fetch(request) {
```

- Defines the request handler function that receives a `request` object for each HTTP request
- Uses the modern `fetch` API pattern similar to web standards

```javascript
const url = new URL(request.url);
```

- Creates a new URL object from the request URL string
- This provides easy access to URL components like pathname, search params, etc.

```javascript
    if (url.pathname === "/") {
      return new Response("Hello welcome to home by bun", { status: 200 });
```

- Checks if the requested path is the root "/"
- Returns a Response object with welcome message and HTTP 200 (OK) status

```javascript
    } else if (url.pathname === "/login") {
      return new Response("Welcome to login page by bun", { status: 200 });
```

- Handles requests to "/login" path
- Returns a login page message with HTTP 200 status

```javascript
    } else {
      return new Response("404 Not Found", { status: 404 });
```

- Catches all other paths not handled above
- Returns a 404 error response with appropriate HTTP status code

```javascript
  },
  port: 3000,
  hostname: "127.0.0.1",
});
```

- Configures server to listen on port 3000
- Sets hostname to localhost (127.0.0.1)
- Closes the configuration object and starts the server

### Key Features

- **Modern ES6 Syntax**: Uses ES6 imports and modern JavaScript features
- **URL Object Parsing**: Utilizes the `URL` constructor for robust URL parsing
- **Response Object**: Returns standard `Response` objects with status codes
- **Clean Routing Logic**: Simple conditional routing based on pathname
- **High Performance**: Leverages Bun's optimized runtime for better performance

### Server Configuration

| Parameter    | Value     | Description               |
| ------------ | --------- | ------------------------- |
| **Port**     | 3000      | Server listening port     |
| **Hostname** | 127.0.0.1 | Local loopback address    |
| **Runtime**  | Bun       | Modern JavaScript runtime |

### Route Endpoints

- **`/`** - Home page with welcome message
- **`/login`** - Login page endpoint
- **`/*`** - 404 handler for undefined routes

---

## 🌐 Node.js HTTP Server

### Description

A traditional HTTP server implementation using Node.js's built-in `http` module. This approach follows the classic Node.js server pattern with request/response handling and explicit server listening.

### Code Implementation

```javascript
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello shiv, server is working");
  } else if (req.url === "/login") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("you has redirect to login");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`server is listening at http://${hostname}:${port}`);
});
```

### Code Explanation

**Line-by-Line Breakdown:**

```javascript
const http = require("http");
```

- Imports Node.js's built-in HTTP module using CommonJS require syntax
- This module provides functionality to create HTTP servers and clients

```javascript
const hostname = "127.0.0.1";
const port = 3000;
```

- Defines constant variables for server configuration
- `hostname`: Sets server address to localhost (127.0.0.1)
- `port`: Sets server port to 3000

```javascript
const server = http.createServer((req, res) => {
```

- Creates an HTTP server instance using `http.createServer()`
- Takes a callback function that handles incoming requests
- `req`: Request object containing request data
- `res`: Response object used to send responses back to client

```javascript
  if (req.url === "/") {
```

- Checks if the requested URL is the root path "/"
- Uses direct string comparison on `req.url` property

```javascript
res.statusCode = 200;
res.setHeader("Content-Type", "text/plain");
res.end("Hello shiv, server is working");
```

- Sets HTTP status code to 200 (OK)
- Sets Content-Type header to "text/plain"
- Sends response body and ends the response with personalized message

```javascript
  } else if (req.url === "/login") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("you has redirect to login");
```

- Handles requests to "/login" path
- Sets status code 200 and content type
- Sends login redirect message and ends response

```javascript
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
```

- Catches all unmatched routes
- Sets HTTP 404 (Not Found) status code
- Sends 404 error message

```javascript
server.listen(port, hostname, () => {
  console.log(`server is listening at http://${hostname}:${port}`);
});
```

- Starts the server listening on specified port and hostname
- Takes a callback function that runs when server starts successfully
- Logs confirmation message to console with server URL

### Key Features

- **CommonJS Modules**: Uses traditional `require()` syntax
- **HTTP Module**: Built on Node.js's core `http` module
- **Manual Response Handling**: Explicit status codes and headers management
- **Server Lifecycle**: Separate server creation and listening phases
- **Console Logging**: Startup confirmation message

### Server Configuration

| Parameter        | Value      | Description                    |
| ---------------- | ---------- | ------------------------------ |
| **Port**         | 3000       | Server listening port          |
| **Hostname**     | 127.0.0.1  | Local loopback address         |
| **Runtime**      | Node.js    | Traditional JavaScript runtime |
| **Content-Type** | text/plain | Response content type header   |

### Route Endpoints

- **`/`** - Home page with personalized greeting
- **`/login`** - Login redirect message
- **`/*`** - 404 handler for undefined routes

---

## 🔄 Comparison Overview

| Aspect                | Bun.js Server              | Node.js Server           |
| --------------------- | -------------------------- | ------------------------ |
| **Syntax**            | Modern ES6+                | Traditional CommonJS     |
| **Performance**       | Higher (optimized runtime) | Standard                 |
| **URL Parsing**       | URL constructor            | Direct string comparison |
| **Response Handling** | Response objects           | Manual res methods       |
| **Server Setup**      | Single serve() call        | createServer + listen    |
| **Logging**           | None (implicit)            | Explicit console.log     |

## 🚦 Usage Instructions

### Running the Bun.js Server

```bash
# Install Bun (if not already installed)
curl -fsSL https://bun.sh/install | bash

# Run the server
bun run server.js
```

### Running the Node.js Server

```bash
# Run with Node.js
node server.js
```

Both servers will be accessible at `http://127.0.0.1:3000`

## 🎯 Conclusion

Both implementations achieve the same functionality but demonstrate different approaches to HTTP server creation. The Bun.js version showcases modern JavaScript runtime capabilities, while the Node.js version represents the traditional, widely-adopted approach. Choose based on your project requirements, performance needs, and runtime preferences.
