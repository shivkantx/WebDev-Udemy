import "dotenv/config";
import logger from "./logger.js";
import morgan from "morgan";

// Import express module to create the server and handle routing
import express from "express";

const app = express(); // Creates the Express app instance
const port = process.env.PORT || 3000; // Port where the server will run

app.use(express.json()); // Middleware to parse JSON bodies
const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

// In-memory storage for tea items
let teaData = [];
let nextId = 1;

// Handles adding a new tea item
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

// Returns all tea items
app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

// Returns a specific tea item by ID
app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((obj) => obj.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea not found");
  }
  res.status(200).send(tea);
});

// Updates a specific tea item by ID
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

// Deletes a specific tea item by ID
app.delete("/teas/:id", (req, res) => {
  console.log(`Deleting tea having id : ${req.params.id}`);
  const index = teaData.findIndex((obj) => obj.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("tea not found");
  }
  teaData.splice(index, 1);
  return res.status(200).send("deleted");
});

// Starts the server and listens on the defined port
app.listen(port, () => {
  console.log(`Server is running at port : ${port}...`);
});
