import { create } from "zustand";
import axios from "axios";

const API_URL = "https://api.uphill-tech.com";


export const useTodoAuth = create((set) => ({
  todos: [],
  error: null,
  isLoading: false,
  isUpdating: false, 

  fetchTodos: async (user) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${API_URL}/getTodo`, { email: user.email }, { withCredentials: true });
      set({ todos: res.data.todos, isLoading: false });
    } catch (error) {
      console.error(error.message || "Error occurred in fetching todos");
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
      }, { withCredentials: true });

      set((state) => ({
        todos: [...state.todos, res.data.todo],
        isLoading: false,
      }));
    } catch (error) {
      console.error(error.message || "Error occurred in adding new todo");
      set({ error: error.message, isLoading: false });
    }
  },

  updateTodo: async (todoId, title, content, tags, user, isPinned) => {
    set({ isUpdating: true, error: null }); 
    try {
      const res = await axios.put(`${API_URL}/editTodo/${todoId}`, {
        title,
        content,
        tags,
        email: user.email,
        isPinned
      }, { withCredentials: true });

      set((state) => ({
        todos: state.todos.map((todo) =>
          todo._id === todoId ? { ...todo, ...res.data.updatedTodo } : todo
        ),
        isUpdating: false,
      }));
    } catch (error) {
      console.error(error.message || "Error occurred in updating todo");
      set({ error: error.message, isUpdating: false });
    }
  },

  deleteTodo: async (id, email) => {
    set({ isLoading: true }); 
    try {
      const response = await axios.delete(`${API_URL}/deleteTodo/${id}`, {
        data: { email },
      }, { withCredentials: true });

      const data = response.data;

      if (!data.error) {
        set((state) => ({
          todos: state.todos.filter((todo) => todo._id !== id),
          isLoading: false,
        }));
      } else {
        console.error(data.message);
        set({ error: data.message, isLoading: false }); // Handle error if exists
      }
    } catch (error) {
      console.error('Error deleting todo:', error.message || error);
      set({ error: error.message, isLoading: false });
    }
  },
}));
