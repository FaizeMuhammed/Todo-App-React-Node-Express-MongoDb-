const router = require("express").Router();
const mongoose = require("mongoose");
const Todo = require("../modals/Todo");

// Getting all todos
router.get("/", async (req, res) => {
  console.log('hiii');
  
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Adding new todo
router.post("/", async (req, res) => {
  const todo = new Todo(req.body);
  try {
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
});

// Updating a todo (mark as completed)
router.patch("/:id/complete", async (req, res) => {
  const { id } = req.params; 
  console.log(id);  

  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`This id ${id} is not valid`);
  }

  try {
    
    const todo = await Todo.findByIdAndUpdate(id, { completed: true }, { new: true });
    res.json({ message: "Task completed successfully", todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Deleting a todo
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`This id ${id} is not valid`);
  }
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Todo deleted successfully" });
});

module.exports = router;
