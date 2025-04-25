import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = 3001;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

app.use(express.static(join(__dirname, 'public')));

let tasks = [];
let nextId = 1;

app.get('https://fabrika.onrender.com/tasks', (req, res) => {
  res.json(tasks);
});

app.post('https://fabrika.onrender.com/tasks', (req, res) => {
  const { title } = req.body;
  
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Task title is required' });
  }
  
  const newTask = {
    id: nextId++,
    title: title.trim(),
    completed: false,
  };
  
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.patch('https://fabrika.onrender.com/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...req.body
  };
  
  res.json(tasks[taskIndex]);
});

app.delete('https://fabrika.onrender.com/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  tasks = tasks.filter(task => task.id !== id);
  res.status(204).send();
});

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on :${PORT}`);
});