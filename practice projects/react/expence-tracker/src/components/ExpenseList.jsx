import { Pencil, Trash2 } from "lucide-react";

const expenses = [
  { title: "Groceries — BigBasket", category: "Food", date: "18 Aug", amount: "₹2,140" },
  { title: "Uber to airport", category: "Travel", date: "17 Aug", amount: "₹680" },
  { title: "Figma subscription", category: "Bills", date: "15 Aug", amount: "₹1,250" },
  { title: "Sneakers", category: "Shopping", date: "12 Aug", amount: "₹4,999" },
  { title: "Electricity bill", category: "Bills", date: "10 Aug", amount: "₹1,830" },
];

export default function ExpenseList() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#e9e9e7] bg-white shadow-[0_1px_2px_rgba(15,15,15,0.06)]">
      <div className="flex items-center justify-between border-b border-[#e9e9e7] px-4 py-3">
        <p className="text-sm font-medium text-[#191919]">Recent expenses</p>
        <button
          type="button"
          className="rounded-md px-2 py-1 text-xs text-[#787774] transition-colors hover:bg-[#f1f1ef] hover:text-[#191919]"
        >
          View all
        </button>
      </div>

      <ul className="divide-y divide-[#e9e9e7]">
        {expenses.map((e) => (
          <li
            key={e.title}
            className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-[#f7f7f5]"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#e9e9e7] bg-[#fcfcfb] text-xs text-[#787774]">
              {e.category[0]}
            </span>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-[#191919]">{e.title}</p>
              <p className="mt-0.5 text-xs text-[#9b9a97]">
                {e.category} · {e.date}
              </p>
            </div>

            <p className="text-sm font-medium tabular-nums text-[#191919]">
              {e.amount}
            </p>

            <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
              <button
                type="button"
                aria-label="Edit expense"
                className="rounded-md p-1.5 text-[#787774] transition-colors hover:bg-[#f1f1ef] hover:text-[#191919]"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Delete expense"
                className="rounded-md p-1.5 text-[#787774] transition-colors hover:bg-[#fdebec] hover:text-[#e03e3e]"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </li>
        ))}

        {expenses.length === 0 && (
          <li className="px-4 py-10 text-center text-sm text-[#9b9a97]">
            No expenses yet. Add your first one above.
          </li>
        )}
      </ul>
    </div>
  );
}
