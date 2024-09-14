import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now().toString(), text, completed: false }]);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[550px]">
        <h1 className="text-center text-2xl font-bold mb-6">To Do App</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default App;



