import { User } from "../Models/user.model.js";
import { Todo } from "./../Models/todo.model.js";

export const getTodos = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email }).select("todos");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const todos = await Todo.find({ userId: user._id }).sort({ isPinned: -1 });

    return res.json({
      error: false,
      todos,
      message: "All notes retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  const { title, content, tags, email, isPinned } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const todo = new Todo({
      title,
      content,
      tags: tags || [],
      userId: user._id,
      isPinned: isPinned !== undefined ? isPinned : false,
    });

    await todo.save();

    res.status(201).json({
      message: "Todo created successfully",
      todo,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateTodo = async (req, res) => {
  const { title, content, tags, isPinned, email } = req.body;
  const todo_id = req.params.id;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const todo = await Todo.findOne({ _id: todo_id, userId: user._id });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    if (title !== undefined) todo.title = title;
    if (content !== undefined) todo.content = content;
    if (tags !== undefined) todo.tags = tags;
    if (isPinned !== undefined) todo.isPinned = isPinned;
    await todo.save();
    return res.json({
      error: false,
      updatedTodo: todo,
      message: "ToDo updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const noteId = req.params.id;
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const todo = await Todo.findOne({ _id: noteId, userId: user._id });
    if (!todo) {
      return res.status(404).json({ error: true, message: "Note not found" });
    }
    await Todo.deleteOne({ _id: noteId, userId: user._id });

    return res.json({
      error: false,
      message: "Note deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePinned = async (req, res) => {
  const { isPinned, email } = req.body;
  const todo_id = req.params.id;

  console.log(req.params.id, "params");

  try {
    const user = await User.findOne({ email });
    const todo = await Todo.findOne({ _id: todo_id, userId: user._id });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (isPinned) todo.isPinned = isPinned;

    await todo.save();
    return res.json({
      error: false,
      todo,
      message: "ToDo updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
