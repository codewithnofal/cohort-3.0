import { Plus, Search } from "lucide-react";
import { useState } from "react";
import { useTodo } from "../hooks/useTodoListHook";

export default function TodoInput() {
  const { todo, setTodo, query, setQuery, addTodo } = useTodo();
  return (
    <div className="space-y-3">
      {/* Add todo row */}
      <form onSubmit={addTodo} className="flex flex-col gap-2 sm:flex-row">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Add a new task…"
          className="flex-1 rounded-lg border border-[#e9e9e7] bg-white px-3 py-2.5 text-sm text-[#191919] placeholder:text-[#9b9a97] transition-colors focus:border-[#b8b8b5] focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[#191919] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 active:opacity-80"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </form>

      {/* Search + filter row */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#e9e9e7] bg-[#fcfcfb] px-3 py-2 transition-colors focus-within:border-[#b8b8b5]">
          <Search className="h-4 w-4 shrink-0 text-[#9b9a97]" />
          <input
            type="text"
            placeholder="Search tasks…"
            className="w-full bg-transparent text-sm text-[#191919] placeholder:text-[#9b9a97] focus:outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-1 rounded-lg border border-[#e9e9e7] bg-[#fcfcfb] p-1">
          <button
            type="button"
            className="flex-1 cursor-pointer rounded-md bg-[#191919] px-3 py-1.5 text-xs font-medium text-white sm:flex-none"
          >
            All
          </button>
          <button
            type="button"
            className="flex-1 cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium text-[#787774] transition-colors hover:bg-[#f1f1ef] hover:text-[#191919] sm:flex-none"
          >
            Active
          </button>
          <button
            type="button"
            className="flex-1 cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium text-[#787774] transition-colors hover:bg-[#f1f1ef] hover:text-[#191919] sm:flex-none"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
