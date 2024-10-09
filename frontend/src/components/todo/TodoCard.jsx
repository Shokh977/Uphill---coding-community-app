import { Delete, Edit, Pin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function TodoCard({ todo, onEdit, searchTerm, onDelete }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const highlightText = (text) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-yellow-300 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const cut = (string, limit) => {
    if (!string || typeof string !== "string") {
      return "";
    }

    if (string.length > limit) {
      return string.substring(0, limit) + " ...";
    }

    return string;
  };

  return (
    <div className="relative max-w-md max-h-md dark:bg-gray-800 shadow-xl rounded-md p-4 border dark:border-gray-700">
      <Link className="cursor-pointer" to={`/todo/${todo._id}`}>
        <div className="mb-2">
          <h2 className="text-lg font-semibold">{highlightText(todo.title)}</h2>{" "}
          <p className="font-serif dark:text-gray-400">
            {formatDate(todo.createdAt)}
          </p>
        </div>
        <div>
          <p>{cut(highlightText(todo.content), 100)}</p>

          <p className="text-violet-500">
            {Array.isArray(todo.tags) ? todo.tags.join(", ") : todo.tags}
          </p>
        </div>{" "}
      </Link>

      <div className="flex gap-2 mt-4">
        <Delete
          className="size-5 cursor-pointer hover:text-red-600"
          onClick={onDelete}
        />
        <Edit
          type="submit"
          onClick={() => onEdit()}
          className="size-5 cursor-pointer hover:text-green-500"
        />
      </div>
    </div>
  );
}
