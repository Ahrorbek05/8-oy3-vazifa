import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FunctionComponent<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yangi vazifa qo'shish"
        className="border-2 border-gray-300 p-3 rounded-l-lg flex-grow"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded-r-lg">Qo'shish</button>
    </form>
  );
};

export default TodoForm;
