const fs = require("fs");
const filePath = "./tasks.json";

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};
const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task Added : ", task);
};

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
const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  if (!argument) {
    console.log("Please provide a task to add.");
  } else {
    addTask(argument);
  }
} else if (command === "list") {
  listTask();
} else if (command === "remove") {
  if (!argument || isNaN(argument)) {
    console.log("Please provide a valid task number to remove.");
  } else {
    removeTask(parseInt(argument));
  }
} else {
  console.log("Command not found! Use: add | list | remove");
}
