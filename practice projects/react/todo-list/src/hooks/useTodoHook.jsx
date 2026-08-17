import { useState } from "react";

export const useTodo = () => {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todo")) || [];
  });
  const [editIndex, setEditIndex] = useState(null);

  console.log(todos);
  const addTodo = (e) => {
    e.preventDefault();

    if (data.trim() === "") return;

    if (editIndex !== null) {
      setTodos((prev) => {
        const updatedTodos = prev.map((todo, index) => {
          return index === editIndex ? { ...todo, title: data } : todo;
        });
        localStorage.setItem("todo", JSON.stringify(updatedTodos));
        return updatedTodos;
      });
      setData("");
      setEditIndex(null);
      return;
    }

    const newTodo = {
      title: data,
      id: Date.now(),
      completed: false,
    };

    let todoData = [...todos, newTodo];
    setTodos(todoData);
    localStorage.setItem("todo", JSON.stringify(todoData));

    setData("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      const newTodos = [...prev];
      newTodos.splice(id, 1);

      localStorage.setItem("todo", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const editTodo = (id) => {
    setData(todos[id].title);
    setEditIndex(id);
  };

  const toggleTodo = (id) => {
    setTodos((prev) => {
      const todoCompleted = prev.map((todo, index) => {
        return index === id ? { ...todo, completed: !todo.completed } : todo;
      });
      localStorage.setItem("todo", JSON.stringify(todoCompleted));
      return todoCompleted;
    });
  };

  return {
    data,
    setData,
    todos,
    setTodos,
    addTodo,
    deleteTodo,
    editTodo,
    toggleTodo,
  };
};
