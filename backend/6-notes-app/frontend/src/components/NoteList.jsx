import { Pencil, Trash2 } from "lucide-react";

const notes = [
  {
    title: "Project ideas",
    description:
      "Build a minimal notes app, then try a habit tracker and a recipe manager.",
  },
  {
    title: "Meeting notes",
    description:
      "Discuss Q3 roadmap, design system updates, and performance improvements.",
  },
  {
    title: "Grocery list",
    description:
      "Milk, eggs, bread, coffee, bananas, and some snacks for the weekend.",
  },
];

export default function NoteList() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <li
          key={note.title}
          className="group flex flex-col justify-between rounded-xl border border-[#e9e9e7] bg-white p-4 shadow-[0_1px_2px_rgba(15,15,15,0.06)] transition-colors hover:border-[#d3d3d1]"
        >
          <div>
            <h3 className="text-sm font-semibold text-[#191919]">
              {note.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#787774]">
              {note.description}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-1">
            <button
              type="button"
              aria-label="Edit note"
              className="rounded-md p-1.5 text-[#787774] transition-colors hover:bg-[#f1f1ef] hover:text-[#191919]"
            >
              <Pencil className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Delete note"
              className="rounded-md p-1.5 text-[#787774] transition-colors hover:bg-[#fdebec] hover:text-[#e03e3e]"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </li>
      ))}

      {notes.length === 0 && (
        <li className="col-span-full rounded-xl border border-dashed border-[#d3d3d1] bg-white py-10 text-center text-sm text-[#9b9a97]">
          No notes yet. Add your first one above.
        </li>
      )}
    </ul>
  );
}
