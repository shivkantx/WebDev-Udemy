# Node.js fs (File System) Module

## What is fs Module?

The `fs` module is a built-in Node.js module that provides an API for interacting with the file system. It allows you to perform file operations like reading, writing, creating, and deleting files.

## Basic Usage

```javascript
const fs = require("fs");
```

## Common Methods

### Synchronous Methods (Blocking)

- **`fs.readFileSync(path)`** - Reads file content synchronously
- **`fs.writeFileSync(path, data)`** - Writes data to file synchronously
- **`fs.existsSync(path)`** - Checks if file/directory exists
- **`fs.unlinkSync(path)`** - Deletes a file synchronously

### Asynchronous Methods (Non-blocking)

- **`fs.readFile(path, callback)`** - Reads file with callback
- **`fs.writeFile(path, data, callback)`** - Writes file with callback
- **`fs.unlink(path, callback)`** - Deletes file with callback

## Example from Your Code

```javascript
// Reading a file synchronously
const dataBuffer = fs.readFileSync("./tasks.json");
const dataString = dataBuffer.toString();

// Writing a file synchronously
const jsonData = JSON.stringify(tasks);
fs.writeFileSync("./tasks.json", jsonData);
```

## Key Points

- **Synchronous** methods block code execution until operation completes
- **Asynchronous** methods don't block - use callbacks or promises
- Always handle errors when working with files
- File paths can be relative (`./file.txt`) or absolute (`/home/user/file.txt`)
- Returns **Buffer** objects by default - use `.toString()` to convert to string

## Buffer vs String

```javascript
// Buffer (raw data)
const buffer = fs.readFileSync("file.txt");

// String (readable text)
const string = fs.readFileSync("file.txt", "utf8");
// OR
const string = buffer.toString();
```

## Error Handling

```javascript
try {
  const data = fs.readFileSync("file.txt");
} catch (error) {
  console.log("File not found or other error");
}
```

# Task Manager Code Explanation

## Overview

This is a command-line task manager application built with Node.js that stores tasks in a JSON file. Users can add, list, and remove tasks via command-line arguments.

## Dependencies & Setup

```javascript
const fs = require("fs");
const filePath = "./tasks.json";
```

- **fs**: Node.js built-in file system module for file operations
- **filePath**: Constant defining where tasks are stored (tasks.json file)

## Core Functions

### 1. `loadTasks()`

**Purpose**: Reads and parses tasks from the JSON file

```javascript
const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};
```

**How it works**:

- Uses `fs.readFileSync()` to synchronously read the tasks.json file
- Converts the buffer data to string format
- Parses the JSON string into a JavaScript array
- Returns empty array `[]` if file doesn't exist or has errors (first-time usage)

### 2. `saveTasks(tasks)`

**Purpose**: Writes the tasks array back to the JSON file

```javascript
const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};
```

**How it works**:

- Takes an array of tasks as parameter
- Converts the array to JSON string using `JSON.stringify()`
- Writes the JSON string to tasks.json file synchronously

### 3. `addTask(task)`

**Purpose**: Adds a new task to the task list

```javascript
const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task Added : ", task);
};
```

**How it works**:

- Loads existing tasks using `loadTasks()`
- Adds new task as an object `{ task: "task content" }` to the array
- Saves updated array back to file
- Confirms addition with console message

### 4. `listTask()`

**Purpose**: Displays all tasks with numbered list

```javascript
const listTask = () => {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log("No tasks found!");
    return;
  }
  tasks.forEach((task, index) => {
    console.log(`${index + 1} - ${task.task}`);
  });
};
```

**How it works**:

- Loads all tasks from file
- Checks if task list is empty and shows appropriate message
- Uses `forEach()` to iterate through tasks
- Displays each task with 1-based numbering (index + 1)

### 5. `removeTask(elementIndex)`

**Purpose**: Removes a task by its position number

```javascript
const removeTask = (elementIndex) => {
  const tasks = loadTasks();
  if (elementIndex < 1 || elementIndex > tasks.length) {
    console.log("Invalid task number.");
    return;
  }
  const afterRemoveArr = tasks.splice(elementIndex - 1, 1);
  saveTasks(tasks);
  console.log("Task Removed:", afterRemoveArr[0].task);
};
```

**How it works**:

- Loads existing tasks
- Validates if the provided index is within valid range (1 to tasks.length)
- Uses `splice(elementIndex - 1, 1)` to remove one task at the specified position
- Converts from 1-based user input to 0-based array index
- Saves updated array and confirms removal

## Command Line Interface

```javascript
const command = process.argv[2];
const argument = process.argv[3];
```

- **process.argv[2]**: First command-line argument (add/list/remove)
- **process.argv[3]**: Second command-line argument (task content or task number)

### Command Processing Logic

The application handles three commands:

**ADD Command**:

```javascript
if (command === "add") {
  if (!argument) {
    console.log("Please provide a task to add.");
  } else {
    addTask(argument);
  }
}
```

- Requires a task description as argument
- Calls `addTask()` function

**LIST Command**:

```javascript
else if (command === "list") {
  listTask();
}
```

- No additional arguments needed
- Calls `listTask()` function

**REMOVE Command**:

```javascript
else if (command === "remove") {
  if (!argument || isNaN(argument)) {
    console.log("Please provide a valid task number to remove.");
  } else {
    removeTask(parseInt(argument));
  }
}
```

- Requires a valid task number as argument
- Validates that argument is a number using `isNaN()`
- Converts string argument to integer with `parseInt()`

## Usage Examples

```bash
node app.js add "Buy groceries"
node app.js list
node app.js remove 2
```

## Data Structure

Tasks are stored as an array of objects:

```json
[
  { "task": "Buy groceries" },
  { "task": "Walk the dog" },
  { "task": "Study JavaScript" }
]
```

# Adding 10 Tasks to Your Todo Application by command prompt

## Execute Each Command Separately

Run these commands one by one in your terminal:

```bash
node todo.js add "Buy groceries"
node todo.js add "Complete JavaScript assignment"
node todo.js add "Read 10 pages of a book"
node todo.js add "Go for a walk"
node todo.js add "Call mom"
node todo.js add "Clean the desk"
node todo.js add "Backup my laptop"
node todo.js add "Practice coding problems"
node todo.js add "Plan weekend trip"
node todo.js add "Update LinkedIn profile"
```

## Expected Console Output

After running all commands, you should see:

```
Task Added :  Buy groceries
Task Added :  Complete JavaScript assignment
Task Added :  Read 10 pages of a book
Task Added :  Go for a walk
Task Added :  Call mom
Task Added :  Clean the desk
Task Added :  Backup my laptop
Task Added :  Practice coding problems
Task Added :  Plan weekend trip
Task Added :  Update LinkedIn profile
```

## Expected tasks.json File Content

After adding all 10 tasks, your `tasks.json` file will contain:

```json
[
  { "task": "Buy groceries" },
  { "task": "Complete JavaScript assignment" },
  { "task": "Read 10 pages of a book" },
  { "task": "Go for a walk" },
  { "task": "Call mom" },
  { "task": "Clean the desk" },
  { "task": "Backup my laptop" },
  { "task": "Practice coding problems" },
  { "task": "Plan weekend trip" },
  { "task": "Update LinkedIn profile" }
]
```

## Verify Your Tasks

To see all your tasks in a numbered list, run:

```bash
node todo.js list
```

**Expected output:**

```
1 - Buy groceries
2 - Complete JavaScript assignment
3 - Read 10 pages of a book
4 - Go for a walk
5 - Call mom
6 - Clean the desk
7 - Backup my laptop
8 - Practice coding problems
9 - Plan weekend trip
10 - Update LinkedIn profile
```

You can also create a shell script file called `add_tasks.sh`:

# Removing Tasks from Todo List

## Current Task List in JSON file (Before Removal)

```json
[
  { "task": "Buy groceries" },
  { "task": "Complete JavaScript assignment" },
  { "task": "Read 10 pages of a book" },
  { "task": "Go for a walk" },
  { "task": "Call mom" },
  { "task": "Clean the desk" },
  { "task": "Backup my laptop" },
  { "task": "Practice coding problems" },
  { "task": "Plan weekend trip" },
  { "task": "Update LinkedIn profile" }
]
```

## Remove Index 2 First, Then Index 5

Since removing an item shifts all subsequent indices down, remove the lower index fir

```bash
node todo.js remove 6
node todo.js remove 2
```

### Expected Console Output:

```
Task Removed: Clean the desk
Task Removed: Complete JavaScript assignment
```

## Final Task List (After Removal)

After removing both tasks, run:

```bash
node todo.js list
```

### Expected Output:

```
1 - Buy groceries
2 - Read 10 pages of a book
3 - Go for a walk
4 - Call mom
5 - Backup my laptop
6 - Practice coding problems
7 - Plan weekend trip
8 - Update LinkedIn profile
```

## Final tasks.json File Content

After both removals, your `tasks.json` file will contain:

```json
[
  { "task": "Buy groceries" },
  { "task": "Read 10 pages of a book" },
  { "task": "Go for a walk" },
  { "task": "Call mom" },
  { "task": "Backup my laptop" },
  { "task": "Practice coding problems" },
  { "task": "Plan weekend trip" },
  { "task": "Update LinkedIn profile" }
]
```

## Complete Command Sequence

Here's the complete sequence with verification:

```bash
# Show current tasks
node todo.js list

# Remove task at index 6 first (Clean the desk)
node todo.js remove 6

# Remove task at index 2 (Complete JavaScript assignment)
node todo.js remove 2

# Verify final list
node todo.js list
```

## Summary of Changes

- **Removed**: "Complete JavaScript assignment" (was at index 2)
- **Removed**: "Clean the desk" (was at index 6)
- **Remaining**: 8 tasks total
- **Final count**: Tasks are renumbered from 1-8

# Complete Task Removal and Listing Sequence

## Step 1: Current tasks.json File Content (Before Removal)

Your `tasks.json` file currently contains:

```json
[
  { "task": "Buy groceries" },
  { "task": "Complete JavaScript assignment" },
  { "task": "Read 10 pages of a book" },
  { "task": "Go for a walk" },
  { "task": "Call mom" },
  { "task": "Clean the desk" },
  { "task": "Backup my laptop" },
  { "task": "Practice coding problems" },
  { "task": "Plan weekend trip" },
  { "task": "Update LinkedIn profile" }
]
```

## Step 2: Commands to Execute

Run these commands in sequence:

```bash
# Remove task at index 6 (Clean the desk)
node todo.js remove 6

# Remove task at index 2 (Complete JavaScript assignment)
node todo.js remove 2

# List all remaining tasks
node todo.js list
```

## Step 3: Expected Console Output

### After first removal command:

```bash
shivkant639624@penguin:~/Projects/WebDev-Udemy/NodeJS$ node todo.js remove 6
Task Removed: Clean the desk
```

### After second removal command:

```bash
shivkant639624@penguin:~/Projects/WebDev-Udemy/NodeJS$ node todo.js remove 2
Task Removed: Complete JavaScript assignment
```

### After list command:

```bash
shivkant639624@penguin:~/Projects/WebDev-Udemy/NodeJS$ node todo.js list
1 - Buy groceries
2 - Read 10 pages of a book
3 - Go for a walk
4 - Call mom
5 - Backup my laptop
6 - Practice coding problems
7 - Plan weekend trip
8 - Update LinkedIn profile
```

## Step 4: Final tasks.json File Content (After Removal)

After both removals, your `tasks.json` file will contain:

```json
[
  { "task": "Buy groceries" },
  { "task": "Read 10 pages of a book" },
  { "task": "Go for a walk" },
  { "task": "Call mom" },
  { "task": "Backup my laptop" },
  { "task": "Practice coding problems" },
  { "task": "Plan weekend trip" },
  { "task": "Update LinkedIn profile" }
]
```

## Complete Terminal Session Example

Here's what your complete terminal session should look like:

```bash
shivkant639624@penguin:~/Projects/WebDev-Udemy/NodeJS$ node todo.js remove 6
Task Removed: Clean the desk

shivkant639624@penguin:~/Projects/WebDev-Udemy/NodeJS$ node todo.js remove 2
Task Removed: Complete JavaScript assignment

shivkant639624@penguin:~/Projects/WebDev-Udemy/NodeJS$ node todo.js list
1 - Buy groceries
2 - Read 10 pages of a book
3 - Go for a walk
4 - Call mom
5 - Backup my laptop
6 - Practice coding problems
7 - Plan weekend trip
8 - Update LinkedIn profile

shivkant639624@penguin:~/Projects/WebDev-Udemy/NodeJS$
```

## Summary of Changes

- **Started with**: 10 tasks
- **Removed**: "Clean the desk" (was index 6) and "Complete JavaScript assignment" (was index 2)
- **Final result**: 8 tasks remaining
- **Tasks renumbered**: From 1 to 8 in the list output
- **JSON file updated**: Contains 8 task objects
