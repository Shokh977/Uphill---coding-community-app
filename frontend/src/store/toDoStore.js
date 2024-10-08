import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

export const useTodoAuth = create((set) => ({
  todos: [],
  error: null,
  isLoading: false,

  fetchTodos: async (user) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${API_URL}/getTodo`, { email: user.email });
      set({ todos: res.data.todos, isLoading: false });
    } catch (error) {
      console.log(error.message || "Error occurred in fetching todos");
      set({ error: error.message, isLoading: false });
    }
  },

  addNewTodo: async (title, content, tags, user, isPinned) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${API_URL}/add`, {
        title,
        content,
        tags,
        email: user.email,
        isPinned
      });

      set((state) => ({
        todos: [...state.todos, res.data.todo],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error.message || "Error occurred in adding new todo");
      set({ error: error.message, isLoading: false });
    }
  },

  updateTodo: async (todoId, title, content, tags, user, isPinned) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.put(`${API_URL}/editTodo/${todoId}`, {
        title,
        content,
        tags,
        email: user.email,
        isPinned
      });
  
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo._id === todoId ? { ...todo, ...res.data.updatedTodo } : todo
        ),
        isLoading: false,
      }));
  
      setOpen(false);
  
    } catch (error) {
      console.log(error.message || "Error occurred in updating todo");
      set({ error: error.message, isLoading: false });
    }
  },


  deleteTodo: async (id, email) => {
  try {
    const response = await axios.delete(`${API_URL}/deleteTodo/${id}`, {
      data: { email },  // Send email in the request body
    });

    const data = response.data;  // Access the response data directly

    if (!data.error) {
      set((state) => ({
        todos: state.todos.filter((todo) => todo._id !== id), 
      }));
    } else {
      console.error(data.message); 
    }
  } catch (error) {
    console.error('Error deleting todo:', error.message || error); 
  }
}
}));
