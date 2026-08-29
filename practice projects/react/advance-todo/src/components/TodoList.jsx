import { useTodo } from "../hooks/useTodoListHook";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todo } = useTodo();

  return (
    <div className="min-h-screen bg-[#ffffff] px-4 py-10 font-sans sm:py-16">
      <div className="mx-auto w-full max-w-2xl">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f1f1ef] text-lg">
            ✅
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[#191919] sm:text-4xl">
            Tasks
          </h1>
          <p className="mt-2 text-sm text-[#787774]">
            A quiet place to keep track of what matters today.
          </p>
        </header>

        {/* Add + Search + Filter */}
        <TodoInput />

        {/* List */}
        <ul className="mt-6 divide-y divide-[#e9e9e7] overflow-hidden rounded-xl border border-[#e9e9e7] bg-white shadow-[0_1px_2px_rgba(15,15,15,0.06)]">
          {/* {todo?.map((val) => {
            return <TodoItem val={val}  />;
          })} */}
        </ul>

        {/* Footer count */}
        <p className="mt-4 px-1 text-xs text-[#9b9a97]">4 tasks · 2 done</p>
      </div>
    </div>
  );
}
