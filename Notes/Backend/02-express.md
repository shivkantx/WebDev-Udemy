# 🚀 Backend Development Notes

## Package.json Setup, Express Framework & Nodemon Configuration

---

## 📦 **Section 1: Package.json Creation & Setup**

### **Command to Initialize Package.json**

```bash
npm init
```

### **What is package.json?**

Package.json is the **heart of any Node.js project**. It contains:

- Project metadata (name, version, description)
- Dependencies and devDependencies
- Scripts for automation
- Project configuration

### **Interactive Setup Process**

When you run `npm init`, it asks for:

| Field              | Example Value         | Purpose             |
| ------------------ | --------------------- | ------------------- |
| **package name**   | `testing-express`     | Project identifier  |
| **version**        | `1.0.0`               | Semantic versioning |
| **description**    | `a sample of express` | Project description |
| **entry point**    | `index.js`            | Main file to run    |
| **test command**   | _(empty)_             | Testing script      |
| **git repository** | _(empty)_             | Repository URL      |
| **keywords**       | `express, tea`        | Search keywords     |
| **author**         | `Shiv Kant`           | Developer name      |
| **license**        | `ISC`                 | License type        |
| **type**           | `commonjs`            | Module system       |

### **Generated package.json Structure**

```json
{
  "name": "testing-express",
  "version": "1.0.0",
  "description": "a sample of express",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["express", "tea"],
  "author": "Shiv Kant",
  "license": "ISC",
  "type": "commonjs"
}
```

### **Key Points**

- ✅ **Always review** the generated JSON before confirming
- ✅ **Entry point** should match your main server file
- ✅ **Type field** determines if you use ES6 modules or CommonJS

---

## ⚡ **Section 2: Express Framework Installation & Setup**

### **Installing Express**

```bash
npm install express
```

### **What Happens During Installation?**

1. **Downloads 67 packages** (Express + dependencies)
2. **Creates node_modules folder** with all dependencies
3. **Updates package.json** with dependencies section
4. **Creates package-lock.json** for version locking

### **Express Installation Results**

```
added 67 packages, and audited 68 packages in 4s
14 packages are looking for funding
found 0 vulnerabilities
```

### **Key Benefits of Express**

- 🚀 **Fast & Minimalist** web framework
- 🛠️ **Robust routing** system
- 🔧 **Middleware support** for request/response processing
- 📡 **HTTP utility methods** and middleware

### **Running Your Express Server**

```bash
npm run start
# Output: Server is running at port : 3000...
```

### **Common Issue: Manual Server Restart**

**Problem:** Every code change requires manual server restart
**Solution:** Use Nodemon for automatic restart

---

## 🔄 **Section 3: Nodemon - Development Game Changer**

### **What is Nodemon?**

Nodemon is a **development utility** that:

- 👀 **Watches your files** for changes
- 🔄 **Automatically restarts** the server
- ⚡ **Saves development time** dramatically
- 📊 **Shows real-time logs** and output

### **Installing Nodemon**

```bash
npm i -D nodemon
```

**Why `-D` flag?**

- `-D` = `--save-dev`
- Installs as **devDependency**
- Only needed during development
- Won't be installed in production

### **Installation Results**

```
added 28 packages, and audited 96 packages in 3s
18 packages are looking for funding
found 0 vulnerabilities
```

### **Setting Up Nodemon Script**

Add to your `package.json` scripts section:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

### **Running with Nodemon**

```bash
npm run dev
```

### **Nodemon Startup Information**

```
[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
```

---

## 🛠️ **Section 4: Development Workflow Features**

### **Nodemon Features in Action**

#### **Automatic Restart**

```
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Server is running at port : 3000...
```

### **Manual Restart Command**

While nodemon is running, type `rs` and press Enter for manual restart.

### **File Extensions Watched**

- `.js` - JavaScript files
- `.mjs` - ES6 modules
- `.cjs` - CommonJS modules
- `.json` - JSON configuration files

---

## 🎯 **Section 5: Best Practices & Tips**

### **Development vs Production**

```json
{
  "scripts": {
    "start": "node index.js", // Production
    "dev": "nodemon index.js", // Development
    "test": "jest" // Testing
  }
}
```

### **Project Structure**

```
02_Express/
├── package.json          // Project configuration
├── package-lock.json     // Dependency lock file
├── node_modules/         // Dependencies (auto-generated)
├── index.js             // Main server file
└── .gitignore           // Ignore node_modules
```

### **Essential .gitignore**

```
node_modules/
.env
*.log
.DS_Store
```

### **Common Commands Summary**

```bash
# Initialize project
npm init

# Install production dependency
npm install express

# Install development dependency
npm install -D nodemon

# Run production server
npm start

# Run development server
npm run dev

# Install all dependencies (when cloning)
npm install
```

### **Development Tips**

1. ✅ **Check console logs** for real-time output
2. ✅ **Use `console.log()`** for debugging variables
3. ✅ **Restart manually** with `rs` if needed
4. ✅ **Check syntax** carefully for missing brackets/semicolons

---

## 🎉 **Key Takeaways**

### **Package.json Benefits**

- 📋 **Project documentation** and metadata
- 🔧 **Dependency management** (production & development)
- ⚡ **Script automation** for common tasks
- 🚀 **Easy project sharing** and setup

### **Express Advantages**

- 🌐 **Web server creation** made simple
- 🛣️ **Routing system** for handling different endpoints
- ⚙️ **Middleware support** for request processing
- 📱 **API development** capabilities

### **Nodemon Power**

- 🔄 **Automatic server restart** on file changes
- ⚡ **Faster development** workflow
- 💻 **Development-only dependency** (won't affect production)

### **Development Workflow**

1. **Initialize** project with `npm init`
2. **Install** Express for web framework
3. **Add** Nodemon for development ease
4. **Create** server file (index.js)
5. **Run** with `npm run dev` for development
6. **Deploy** with `npm start` for production

---

## 🍵 **Section 6: Express Tea Shop API - Complete CRUD Implementation**

### **📋 Code Overview**

This Express.js application demonstrates a complete **RESTful API** for managing tea items with full CRUD (Create, Read, Update, Delete) operations. It uses **in-memory storage** and follows **REST principles** for API design.

### **🏗️ Server Architecture & Setup**

#### **Import & Initial Configuration**

```javascript
import express from "express"; // ES6 module import (modern syntax)
const app = express(); // Create Express application instance
const port = 3000; // Define server port
app.use(express.json()); // Built-in middleware for JSON parsing
```

**Key Points:**

- **ES6 Modules:** Using `import` instead of `require()` (modern approach)
- **Express Instance:** `app` is the main application object
- **JSON Middleware:** Essential for parsing POST/PUT request bodies
- **Port Configuration:** Hardcoded for development (should be environment variable in production)

#### **Data Storage Strategy**

```javascript
let teaData = []; // In-memory array to store tea objects
let nextId = 1; // Auto-incrementing ID counter
```

**Understanding the Storage:**

- **In-Memory:** Data exists only while server runs (resets on restart)
- **Array Structure:** Simple JavaScript array for CRUD operations
- **ID Management:** Manual ID assignment using counter
- **Data Persistence:** None (would need database in production)

---

### **🔄 CRUD Operations Deep Dive**

#### **CREATE - Adding New Tea Items**

```javascript
app.post("/teas", (req, res) => {
  const { name, price } = req.body; // Destructure request body
  const newTea = { id: nextId++, name, price }; // Create new tea object
  teaData.push(newTea); // Add to array
  res.status(201).send(newTea); // Return created item
});
```

**Breakdown:**

- **HTTP Method:** POST (standard for creation)
- **Destructuring:** Extract `name` and `price` from request body
- **Object Creation:** Combine ID with user data
- **Array Operation:** `push()` adds to end of array
- **Response:** Status 201 (Created) with new object
- **ID Increment:** `nextId++` ensures unique IDs

#### **READ ALL - Fetching Complete Collection**

```javascript
app.get("/teas", (req, res) => {
  res.status(200).send(teaData); // Return entire array
});
```

**Analysis:**

- **Simplest Route:** Just returns all data
- **HTTP Method:** GET (standard for reading)
- **Status Code:** 200 (OK) for successful retrieval
- **No Processing:** Direct array return
- **Scalability Issue:** Returns all data (pagination needed for large datasets)

#### **READ ONE - Fetching Specific Item**

```javascript
app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((obj) => obj.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea not found");
  }
  res.status(200).send(tea);
});
```

**Detailed Explanation:**

- **URL Parameter:** `:id` captures dynamic ID from URL
- **Array Search:** `find()` method searches for matching ID
- **Type Conversion:** `parseInt()` converts string parameter to number
- **Error Handling:** Check if tea exists before responding
- **Early Return:** `return` prevents further execution
- **Status Codes:** 200 (found) or 404 (not found)

#### **UPDATE - Modifying Existing Items**

```javascript
app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((obj) => obj.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea not found");
  }
  const { name, price } = req.body; // Get new values
  tea.name = name; // Update properties
  tea.price = price;
  res.status(200).send(tea); // Return updated object
});
```

**Key Concepts:**

- **HTTP Method:** PUT (standard for updates)
- **Same Search Logic:** Find item first (code reuse opportunity)
- **Direct Assignment:** Modify object properties directly
- **Reference Update:** Changes original object in array
- **Response Pattern:** Return updated object for confirmation

#### **DELETE - Removing Items**

```javascript
app.delete("/teas/:id", (req, res) => {
  console.log(`Deleting tea having id : ${req.params.id}`);
  const index = teaData.findIndex((obj) => obj.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("tea not found");
  }
  teaData.splice(index, 1); // Remove from array
  return res.status(200).send("deleted");
});
```

**Technical Details:**

- **Logging:** `console.log()` for debugging (visible in terminal)
- **Index Finding:** `findIndex()` returns position, not object
- **Index Check:** `-1` means not found
- **Array Removal:** `splice(index, 1)` removes one item at index
- **Simple Response:** Just confirmation message

---

### **🎯 Advanced Programming Concepts**

#### **ES6 Destructuring**

```javascript
const { name, price } = req.body;
// Equivalent to:
// const name = req.body.name;
// const price = req.body.price;
```

#### **Array Methods Mastery**

| Method        | Purpose          | Returns             | Use Case            |
| ------------- | ---------------- | ------------------- | ------------------- |
| `find()`      | Find first match | Object or undefined | Get single item     |
| `findIndex()` | Find position    | Index or -1         | Locate for deletion |
| `push()`      | Add to end       | New array length    | Add new items       |
| `splice()`    | Remove/replace   | Removed elements    | Delete items        |

#### **HTTP Status Code Strategy**

- **200 (OK):** Successful GET, PUT, DELETE
- **201 (Created):** Successful POST
- **404 (Not Found):** Item doesn't exist
- **Consistent Pattern:** Same codes across similar operations

---

### **🚀 Server Startup & Lifecycle**

#### **Server Initialization**

```javascript
app.listen(port, () => {
  console.log(`Server is running at port : ${port}...`);
});
```

**What Happens:**

1. Express binds to specified port
2. Server starts listening for requests
3. Callback function executes (confirmation message)
4. Server remains active until manually stopped

#### **Request-Response Cycle**

1. **Client** sends HTTP request to server
2. **Express** matches URL pattern to route
3. **Handler function** processes request
4. **Response** sent back to client
5. **Connection** closes (stateless)

---

### **🛠️ Development & Production Considerations**

#### **Current Limitations**

- **No Persistence:** Data lost on restart
- **No Validation:** Accepts any input format
- **No Authentication:** Public access to all operations
- **Memory Limits:** Array grows indefinitely
- **No Error Logging:** Basic console output only

#### **Production Improvements Needed**

```javascript
// Environment-based configuration
const port = process.env.PORT || 3000;

// Input validation
const { error, value } = schema.validate(req.body);

// Database integration
const newTea = await Tea.create({ name, price });

// Error middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
```

#### **API Testing Commands**

```bash
# Create tea
curl -X POST http://localhost:3000/teas -H "Content-Type: application/json" -d '{"name":"Green Tea","price":25}'

# Get all teas
curl http://localhost:3000/teas

# Get specific tea
curl http://localhost:3000/teas/1

# Update tea
curl -X PUT http://localhost:3000/teas/1 -H "Content-Type: application/json" -d '{"name":"Earl Grey","price":30}'

# Delete tea
curl -X DELETE http://localhost:3000/teas/1
```

---

### **💡 Learning Outcomes**

After understanding this code, you now know:

- ✅ **RESTful API Design** principles and implementation
- ✅ **Express.js Framework** routing and middleware usage
- ✅ **CRUD Operations** with in-memory data storage
- ✅ **HTTP Methods** and appropriate status codes
- ✅ **JavaScript ES6** features (destructuring, arrow functions)
- ✅ **Array Methods** for data manipulation
- ✅ **Request/Response** cycle in web servers

This foundation prepares you for building scalable web applications with proper database integration and advanced features!

---

# Tea API Server Documentation with Postman

## 📋 Overview

This is a RESTful API server built with Express.js for managing a tea inventory system. The application provides full CRUD (Create, Read, Update, Delete) operations for tea items with in-memory storage.

## 🛠️ Technology Stack

- **Framework**: Express.js
- **Runtime**: Node.js
- **Data Storage**: In-memory arrays
- **HTTP Methods**: GET, POST, PUT, DELETE

## 🚀 Server Configuration

```javascript
import express from "express";
const app = express();
const port = 3000;
```

### Key Components:

- **Express App**: Main application instance
- **Port**: Server runs on port 3000
- **JSON Middleware**: Parses incoming JSON request bodies

## 💾 Data Structure

```javascript
let teaData = [];
let nextId = 1;
```

### Data Model:

- **teaData**: Array storing all tea items
- **nextId**: Auto-incrementing ID counter
- **Tea Object Structure**:
  ```javascript
  {
    id: number,
    name: string,
    price: number
  }
  ```

## 📡 API Endpoints

### 1. Create Tea Item

**`POST /teas`**

```javascript
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});
```

- **Purpose**: Adds a new tea item to the inventory
- **Request Body**: `{ name: string, price: number }`
- **Response**: Created tea object with auto-generated ID
- **Status Code**: 201 (Created)

### 2. Get All Tea Items

**`GET /teas`**

```javascript
app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});
```

- **Purpose**: Retrieves all tea items from inventory
- **Response**: Array of all tea objects
- **Status Code**: 200 (OK)

### 3. Get Tea Item by ID

**`GET /teas/:id`**

```javascript
app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((obj) => obj.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea not found");
  }
  res.status(200).send(tea);
});
```

- **Purpose**: Retrieves a specific tea item by ID
- **Parameters**: `id` (URL parameter)
- **Response**: Tea object or error message
- **Status Codes**:
  - 200 (OK) - Tea found
  - 404 (Not Found) - Tea doesn't exist

### 4. Update Tea Item

**`PUT /teas/:id`**

```javascript
app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((obj) => obj.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea not found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(200).send(tea);
});
```

- **Purpose**: Updates an existing tea item
- **Parameters**: `id` (URL parameter)
- **Request Body**: `{ name: string, price: number }`
- **Response**: Updated tea object or error message
- **Status Codes**:
  - 200 (OK) - Successfully updated
  - 404 (Not Found) - Tea doesn't exist

### 5. Delete Tea Item

**`DELETE /teas/:id`**

```javascript
app.delete("/teas/:id", (req, res) => {
  console.log(`Deleting tea having id : ${req.params.id}`);
  const index = teaData.findIndex((obj) => obj.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("tea not found");
  }
  teaData.splice(index, 1);
  return res.status(200).send("deleted");
});
```

- **Purpose**: Removes a tea item from inventory
- **Parameters**: `id` (URL parameter)
- **Features**: Includes console logging for debugging
- **Response**: Success message or error
- **Status Codes**:
  - 200 (OK) - Successfully deleted
  - 404 (Not Found) - Tea doesn't exist

## 🔧 Server Initialization

```javascript
app.listen(port, () => {
  console.log(`Server is running at port : ${port}...`);
});
```

- Starts the server on the specified port
- Provides console confirmation when server is ready

## 📝 Usage Examples

### Adding a New Tea

```bash
POST http://localhost:3000/teas
Content-Type: application/json

{
  "name": "Earl Grey",
  "price": 15.99
}
```

### Getting All Teas

```bash
GET http://localhost:3000/teas
```

### Getting Specific Tea

```bash
GET http://localhost:3000/teas/1
```

### Updating a Tea

```bash
PUT http://localhost:3000/teas/1
Content-Type: application/json

{
  "name": "Premium Earl Grey",
  "price": 18.99
}
```

### Deleting a Tea

```bash
DELETE http://localhost:3000/teas/1
```

## ⚠️ Important Notes

1. **In-Memory Storage**: Data is lost when server restarts
2. **No Authentication**: API endpoints are publicly accessible
3. **Basic Validation**: Limited input validation implemented
4. **ID Management**: Uses simple auto-incrementing integers

## 🎯 Key Features

- ✅ Complete CRUD operations
- ✅ RESTful API design
- ✅ JSON request/response handling
- ✅ Proper HTTP status codes
- ✅ Clean, readable code structure

## 🚦 Status Codes Reference

| Code | Meaning   | Used For                    |
| ---- | --------- | --------------------------- |
| 200  | OK        | Successful GET, PUT, DELETE |
| 201  | Created   | Successful POST             |
| 404  | Not Found | Resource doesn't exist      |

This API serves as an excellent foundation for a tea inventory management system and demonstrates fundamental Express.js concepts for building RESTful web services.

**Happy Coding! 🚀** Your backend development environment is now properly configured for efficient development with automatic restarts.
