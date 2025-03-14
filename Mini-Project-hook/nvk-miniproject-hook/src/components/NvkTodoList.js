import { useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/NvkTodoReducer";
import NvkTodoItem from "./NvkTodoItem";
import NvkAddToDo from "./NvkAddToDo";

function NvkTodoList() {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h2>Danh Sách Công Việc</h2>
      <NvkAddToDo dispatch={dispatch} />
      <ul>
        {todos.map(todo => (
          <NvkTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}

export default NvkTodoList;