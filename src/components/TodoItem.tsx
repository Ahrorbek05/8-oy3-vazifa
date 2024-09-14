import React, { useState } from "react";

interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  toggleComplete: (id: string) => void;
}

const TodoItem: React.FunctionComponent<TodoItemProps> = ({
  todo,
  removeTodo,
  editTodo,
  toggleComplete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="bg-gray-100 p-4 rounded-lg flex items-center justify-between gap-2 w-full">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg flex-grow mr-2"
        />
      ) : (
        <span
          onClick={() => toggleComplete(todo.id)}
          className={`flex-grow overflow-hidden text-ellipsis whitespace-nowrap ${
            todo.completed ? "line-through" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex-shrink-0 flex space-x-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Saqlash
          </button>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              O'zgartirish
            </button>
            <button
              onClick={() => removeTodo(todo.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              O'chirish
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
