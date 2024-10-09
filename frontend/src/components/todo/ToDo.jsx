import ReactModal from "react-modal";
import { Delete, Edit, NotepadText, Pin, StopCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import SearchBar from "../../UI/SearchBar";
import EditPage from "./EditPage";
import { useStoreAuth } from "../../store/authStore";
import { useTodoAuth } from "../../store/toDoStore";
import TodoCard from "./TodoCard";
import { Link } from "react-router-dom";

export default function ToDo() {
  const { user } = useStoreAuth();
  const { todos, fetchTodos, deleteTodo } = useTodoAuth();
  const [searchTerm, setSearchTerm] = useState("");

  const [open, setOpen] = useState({
    type: "add",
    isShown: false,
    data: null,
  });

  ReactModal.setAppElement("#root");

  console.log(todos, "todofrom");
  useEffect(() => {
    if (user && user.email) {
      fetchTodos(user);
    }
  }, [user]);

  const handleCreate = () => {
    setOpen({ isShown: true });
  };

  const handleEdit = (todoDetails) => {
    setOpen({
      isShown: true,
      type: "edit",
      data: todoDetails,
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id, user.email);
    } catch (error) {
      console.log("Error deleting todo:", error.message);
    }
  };


  const filteredTodos = todos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-auto dark:bg-gray-900 border dark:border-gray-800">
      <div className="flex md:flex-row flex-col gap-2 justify-around p-3 items-center">
        <div className="flex items-center gap-1">
          <NotepadText className="text-violet-500" />
          <h1 className="text-xl font-bold">Notes</h1>
        </div>
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <button
            onClick={handleCreate}
            className="font-bold text-lg flex gap-1 items-center border text-violet-500 py-2 px-3 rounded">
            Create
          </button>
        </div>
      </div>
      {user ? (
        <div className="grid md:grid-cols-3 gap-2 p-4">
          {filteredTodos.map((todo) => (
            <TodoCard
              searchTerm={searchTerm}
              todo={todo}
              key={todo && todo._id}
              onEdit={() => handleEdit(todo)}
              setOpen={setOpen}
              onDelete={() => handleDelete(todo._id)}
            />
          ))}
          <ReactModal
            isOpen={open.isShown}
            onRequestClose={() =>
              setOpen({ isShown: false, type: "add", data: null })
            }
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(5px)",
              },
              content: {},
            }}
            contentLabel="Todo Modal"
            className="max-w-2xl px-4 max-h-3/4 rounded mx-auto mt-14 p-5 ">
            <EditPage
              setOpen={setOpen}
              todos={todos}
              todoDetails={open.data}
              mode={open.type}
            />
          </ReactModal>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-80">
          <img src="/warn.svg" className="size-40 mx-auto" alt="image" />
          <p className="text-center text-xl p-2">
            <span className="hover:text-violet-500 cursor-pointer font-semibold hover:underline transition-all duration-300">
              <Link to="/login"> Login</Link>
            </span>{" "}
            /{" "}
            <span className="hover:text-violet-500 cursor-pointer font-semibold hover:underline transition-all duration-300">
              <Link to="/sign-up">SignUp</Link>
            </span>{" "}
            to create Notes!
          </p>
        </div>
      )}
    </div>
  );
}
