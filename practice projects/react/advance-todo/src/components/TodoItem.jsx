import { Pencil, Trash2, Check } from "lucide-react";
import { useState } from "react";
import { useTodo } from "../hooks/useTodoListHook";

export default function TodoItem({todo}) {
  const [completed, setCompleted] = useState(true);

  return (
    <li className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-[#f7f7f5]">
      {/* Complete checkbox */}
      <button
        type="button"
        aria-label="Mark complete"
        className={`flex h-5 w-5 cursor-pointer shrink-0 items-center justify-center rounded-[5px] border transition-colors ${
          completed
            ? "border-[#191919] bg-[#191919] text-white"
            : "border-[#d3d3d1] text-transparent hover:border-[#191919]"
        }`}
      >
        <Check className="h-3.5 w-3.5" />
      </button>

      {/* Title */}
      <span
        className={`flex-1 truncate text-sm ${
          completed ? "text-[#9b9a97] line-through" : "text-[#191919]"
        }`}
      >
        {val.title}
      </span>

      {/* Actions */}

      <div className="flex items-center gap-1 transition-opacity md:opacity-0 md:group-hover:opacity-100 md:focus-within:opacity-100">
        <button
          type="button"
          aria-label="Edit task"
          className="rounded-md p-1.5 text-[#787774] transition-colors hover:bg-[#00ff4c17] hover:text-[#09ff11]"
        >
          <Pencil className="h-4 cursor-pointer w-4" />
        </button>
        <button
          type="button"
          aria-label="Delete task"
          className="rounded-md p-1.5 text-[#787774] transition-colors hover:bg-[#fdebec] hover:text-[#e03e3e]"
        >
          <Trash2 className="h-4 cursor-pointer w-4" />
        </button>
      </div>
    </li>
  );
}
