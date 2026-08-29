import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodo = () => {
  const { todo, setTodo } = useContext(TodoContext);
  const [query, setQuery] = useState("");
  console.log(todo);

  const addTodo = (e) => {
    e.preventDefault();
    if (query === "") return;

    setTodo([{ id: Date.now(), title: { ...query.trim() } }]);

    setQuery("");
  };

  return {
    query,
    setQuery,
    todo,
    setTodo,
    addTodo,
  };
};
