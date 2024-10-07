import axios from "axios";
import React, { useState } from "react";
import { useStoreAuth } from "../../store/authStore";

export default function EditPage({todoDetails, setOpen, getTodos }) {
  const [tags, setTags] = useState(todoDetails.tags || "");
  const [content, setContent] = useState(todoDetails.content || "");
  const [title, setTitle] = useState(todoDetails.title || "");

  const API_URL = "http://localhost:5000/api/todos";
  const { user } = useStoreAuth();

  const addNewNote = async () => {
    try {
      const res = await axios.post(`${API_URL}/add`, {
        title,
        content,
        tags,
        email: user.email,
      });
      if (res.data && res.data.todo) {
        getTodos();
        setOpen((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-auto my-8 h-auto flex flex-col gap-6 dark:bg-gray-800 bg-slate-100 p-4 rounded">
      <form>
        <input
          className="dark:bg-gray-900 dark:text-white rounded border-none outline-none p-3"
          type="text"
          placeholder="Get up early"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="dark:bg-gray-900 dark:text-white rounded border-none outline-none p-3"
          type="text"
          placeholder="well, well, well"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div>
          <p className="dark:text-gray-400">{tags}</p>
        </div>
        <select
          className="p-2 rounded-sm dark:text-white dark:bg-gray-900 font-semibold opacity-70"
          value={tags}
          onChange={(e) => setTags(e.target.value)}>
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
            onClick={addNewNote}>
            Add
          </button>
          <button
            className="py-2 px-4 rounded bg-red-500 text-white transition-all duration-300"
            type="button"
            onClick={() => setOpen((prev) => !prev)}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
