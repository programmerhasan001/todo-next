"use client";
// src/components/TodoList.tsx
import { useState } from "react";
import useTodoStore from "../store";

const TodoList: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  const handleEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  const handleUpdate = (id: number) => {
    updateTodo(id, editingText);
    setEditingId(null);
    setEditingText("");
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {editingId === todo.id ? (
            <div>
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
              <button
                onClick={() => handleUpdate(todo.id)}
                className="mx-2 border rounded p-1 cursor-pointer"
              >
                Update
              </button>
              <button
                onClick={() => setEditingId(null)}
                className="border rounded p-1 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <span onClick={() => toggleTodo(todo.id)} className="mr-4">
                {todo.text}
              </span>
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className="mr-3 border rounded p-1 cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => removeTodo(todo.id)}
                className="border rounded p-1 cursor-pointer"
              >
                Remove
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
