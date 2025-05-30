const express  = require('express');
const app =  express();
const cors = require("cors");
const fs = require('fs');
const path = require('path');
app.use(cors());
app.use(express.json());

const PORT = 8080;


const dummyFilePath = path.join(__dirname, 'dummy.json');

function readData() {
  const data = fs.readFileSync(dummyFilePath, 'utf-8');
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(dummyFilePath, JSON.stringify(data, null, 2), 'utf-8');
}



// GET all users
app.get('/users', (req, res) => {
  const data = readData();
  res.json(data);
});

// GET a user by ID
app.get('/users/:id', (req, res) => {
  const data = readData();
  const user = data.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// CREATE a new user
app.post('/users', (req, res) => {
  const data = readData();
  const newUser = { ...req.body, id: Date.now() }; // Using Date.now() as ID
  data.push(newUser);
  writeData(data);
  res.status(201).json(newUser);
});

// UPDATE a user
app.put('/users/:id', (req, res) => {
  const data = readData();
  const userIndex = data.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    data[userIndex] = { ...data[userIndex], ...req.body };
    writeData(data);
    res.json(data[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// DELETE a user
app.delete('/users/:id', (req, res) => {
  let data = readData();
  const newData = data.filter(u => u.id !== parseInt(req.params.id));
  if (newData.length === data.length) {
    res.status(404).json({ message: 'User not found' });
  } else {
    writeData(newData);
    res.json({ message: 'User deleted successfully' });
  }
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});