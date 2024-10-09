import axios from "axios";
import React, { useState, useEffect } from "react";
import { useStoreAuth } from "../../store/authStore";
import { useTodoAuth } from "../../store/toDoStore";

export default function EditPage({todoDetails, setOpen, mode }) {
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [isPinned, setIsPinned] = useState(false)
  const { addNewTodo, updateTodo } = useTodoAuth();
  const { user } = useStoreAuth();

  useEffect(() => {
    if (mode === "edit" && todoDetails) {
      setTags(todoDetails.tags || "");
      setContent(todoDetails.content || "");
      setTitle(todoDetails.title || "");
    } else {
      setTags("");
      setContent("");
      setTitle("");
    }
  }, [mode, todoDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "edit") {
      try {
        await updateTodo(todoDetails._id, title, content, tags, user );
        setOpen({ isShown: false }); 
      } catch (error) {
        console.error("Error updating todo:", error.message);
      }
    } else {
      // Add new to-do
      try {
        await addNewTodo(title, content, tags, user, isPinned);
        setOpen({ isShown: false });
      } catch (error) {
        console.error("Error adding todo:", error.message);
      }
    }
  };

  return (
    <div className="w-full my-8 h-auto flex flex-col items-center gap-6 dark:bg-gray-800 bg-slate-100 p-4 rounded">
      <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
        <input
          className="dark:bg-gray-900 dark:text-white rounded border-none outline-none p-3"
          type="text"
          placeholder="Enter title"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="dark:bg-gray-900 dark:text-white rounded border-none outline-none p-3 h-[200px]"
          type="text"
          placeholder="Enter content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <div>
          <p className="dark:text-gray-400">{tags}</p>
        </div>
        <select
          className="p-2 rounded-sm dark:text-gray-400 dark:bg-gray-900 font-semibold opacity-70"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        >
          <option value="">Select tag</option>
          <option value="#education">Education</option>
          <option value="#sports">Sports</option>
          <option value="#food">Food</option>
          <option value="#vocabulary">Vocabulary</option>
          <option value="#language">Languages</option>
          <option value="#others">Others</option>
        </select>

        <div className="flex gap-4 mt-4">
          <button
            className="py-2 px-4 rounded bg-violet-500 text-white hover:text-white transition-all duration-300"
            type="submit"
          >
            {mode === "edit" ? "Update" : "Add"}
          </button>
          <button
            className="py-2 px-4 rounded bg-red-500 text-white transition-all duration-300"
            type="button"
            onClick={() => setOpen({ isShown: false })}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
