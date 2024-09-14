import React from "react";
import TodoItem from "../components/TodoItem";

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  toggleComplete: (id: string) => void;
}

const TodoList: React.FunctionComponent<TodoListProps> = ({ todos, removeTodo, editTodo, toggleComplete }) => {
  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
