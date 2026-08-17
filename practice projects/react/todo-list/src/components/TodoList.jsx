import {
  Pencil,
  Trash2,
  Plus,
  Check,
  CheckCircle2,
  CheckCircle2Icon,
} from "lucide-react";
import { useState } from "react";
import { useTodo } from "../hooks/useTodoHook";

// Pure UI. Saari styling component ke andar hi (Tailwind classes).
export default function TodoList() {
  const {
    data,
    setData,
    todos,
    setTodos,
    addTodo,
    deleteTodo,
    editTodo,
    toggleTodo
  } = useTodo();

  return (
    <div className="min-h-screen bg-[#ffffff] py-16 px-4 font-sans">
      <div className="mx-auto w-full max-w-2xl">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f1f1ef] text-lg">
            <CheckCircle2 />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[#191919]">
            Tasks
          </h1>
          <p className="mt-2 text-sm text-[#787774]">
            A quiet place to keep track of what matters today.
          </p>
        </header>

        {/* Input row */}
        <form
          onSubmit={addTodo}
          className="flex items-center gap-2 rounded-xl border border-[#e9e9e7] bg-white p-2 shadow-[0_1px_2px_rgba(15,15,15,0.06)] transition-colors focus-within:border-[#b8b8b5]"
        >
          <input
            value={data}
            onChange={(e) => setData(e.target.value)}
            type="text"
            placeholder="Add a task…"
            className="flex-1 bg-transparent px-3 py-2 text-sm text-[#191919] placeholder:text-[#9b9a97] focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-[#191919] px-3.5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 active:opacity-80"
          >
            <Plus className="h-4 w-4" />
            Add todo
          </button>
        </form>

        {/* List */}
        <ul className="mt-6 divide-y divide-[#e9e9e7] overflow-hidden rounded-xl border border-[#e9e9e7] bg-white">
          {todos.map((todo, ind) => (
            <li
              key={ind}
              className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-[#f7f7f5]"
            >
              <div onClick={() => toggleTodo(ind)}>
                <span className="flex h-4 w-4 shrink-0 items-center cursor-pointer justify-center rounded-sm border border-[#d3d3d1]  transition-colors group-hover:border-[#191919]">
                 {todo.completed && <Check className="h-3 w-3" />}
                </span>
              </div>

              <span className="flex-1 truncate text-sm text-[#191919]">
                {todo.title}
              </span>

              <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
                <button
                  onClick={() => editTodo(ind)}
                  type="button"
                  aria-label="Edit task"
                  className="rounded-md p-1.5 text-[#787774] transition-colors hover:bg-[#f1f1ef] hover:text-[#191919]"
                >
                  <Pencil className="h-4 cursor-pointer w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Delete task"
                  className="rounded-md p-1.5 text-[#787774] transition-colors hover:bg-[#fdebec] hover:text-[#e03e3e]"
                >
                  <Trash2
                    onClick={() => deleteTodo(ind)}
                    className="h-4 cursor-pointer w-4"
                  />
                </button>
              </div>
            </li>
          ))}

          {/* Empty state */}
          {todos.length === 0 && (
            <li className="px-4 py-10 text-center text-sm text-[#9b9a97]">
              No tasks yet. Add your first one above.
            </li>
          )}
        </ul>

        <p className="mt-4 px-1 text-xs text-[#9b9a97]">{todos.length} tasks</p>
      </div>
    </div>
  );
}
