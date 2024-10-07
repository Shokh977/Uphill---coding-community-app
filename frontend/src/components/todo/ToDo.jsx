import ReactModal from "react-modal";
import { Delete, Edit, NotepadText, Pin } from "lucide-react";
import React, { useEffect, useState } from "react";
import SearchBar from "../../UI/SearchBar";
import EditPage from "./EditPage";
import axios from "axios";
import { useStoreAuth } from "../../store/authStore";

const API_URL = "http://localhost:5000/api/todos";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default function ToDo() {
  const { user } = useStoreAuth();

  const [getTodos, setGetTodos] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  const [open, setOpen] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  ReactModal.setAppElement("#root");

  const fetchTodos = async () => {
    if (!user || !user.email) {
      console.log("User or email is not available");
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/getTodo`, { email: user.email });
      if (res.data && res.data.todos) {
        setGetTodos(res.data.todos);
      }
    } catch (error) {
      console.log(error.message || "Error occurred in fetching todos");
    }
  };

  useEffect(() => {
    if (user && user.email) {
      fetchTodos();
    }
  }, [user]);

  const handleEdit = (tododetails) => {
    setOpen({ isShown: true, data: tododetails, type: "edit" });
  };

  const handleDelete = async (todoId) => {
    try {
      await axios.delete(`${API_URL}/deleteTodo/${todoId}`);
      setGetTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== todoId));
    } catch (error) {
      console.log("Error deleting todo:", error.message);
    }
  };

  const handleSearch = () => {
    return getTodos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        todo.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const onClearSearch = () => {
    setsearchQuery("");
  };

  const filteredTodos = searchQuery ? handleSearch() : getTodos;

  return (
    <div className="w-full h-auto dark:bg-gray-900 shadow-lg">
      <div className="flex md:flex-row flex-col gap-2 justify-around p-3 items-center">
        <div className="flex items-center gap-1">
          <NotepadText className="text-violet-500" />
          <h1 className="text-xl font-bold">Notes</h1>
        </div>
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => setsearchQuery(target.value)}
          onClearSearch={onClearSearch}
        />
        <div>
          <button
            onClick={() => setOpen({ isShown: true, type: "add", data: null })}
            className="font-bold text-lg flex gap-1 items-center border text-violet-500 py-2 px-3 rounded"
          >
            Create
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-2 p-4">
        {/* to do card */}

        {filteredTodos.map((todo) => (
          <div
            className="relative max-w-md max-h-md dark:bg-gray-800 shadow-xl rounded-md p-4"
            key={todo._id}
          >
            {todo.isPinned && (
              <Pin className="absolute right-2 top-2 cursor-pointer size-5 text-violet-500" />
            )}
            <div className="mb-2">
              <h2 className="text-lg font-semibold">{todo.title}</h2>
              <p className="font-serif dark:text-gray-400">
                {formatDate(todo.createdAt)}
              </p>
            </div>
            <div>
              <p>{todo.content}</p>
              <p className="text-violet-500">
                {Array.isArray(todo.tags)
                  ? todo.tags.join(", ")
                  : todo.tags}
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <Delete
                onClick={() => handleDelete(todo._id)}
                className="size-5 cursor-pointer hover:text-red-600"
              />
              <Edit
                onClick={() => handleEdit(todo)}
                className="size-5 cursor-pointer hover:text-green-500"
              />
            </div>
            <ReactModal
              isOpen={open.isShown}
              onRequestClose={() => setOpen({ isShown: false })}
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(5px)",
                },
                content: {},
              }}
              contentLabel="Todo Modal"
              className="max-w-md px-4 max-h-3/4 rounded mx-auto mt-14 p-5 overflow-scroll"
            >
              <EditPage
                setOpen={setOpen}
                getTodos={getTodos}
                todoDetails={todo}
              />
            </ReactModal>
          </div>
        ))}
      </div>
    </div>
  );
}
