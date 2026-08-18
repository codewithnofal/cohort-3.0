const categories = [
  { name: "Food", amount: "₹9,420", pct: 34 },
  { name: "Bills", amount: "₹7,180", pct: 26 },
  { name: "Shopping", amount: "₹6,240", pct: 22 },
  { name: "Travel", amount: "₹3,110", pct: 11 },
  { name: "Other", amount: "₹1,950", pct: 7 },
];

export default function CategoryBreakdown() {
  return (
    <div className="rounded-xl border border-[#e9e9e7] bg-white p-4 shadow-[0_1px_2px_rgba(15,15,15,0.06)]">
      <p className="text-sm font-medium text-[#191919]">By category</p>
      <p className="mt-0.5 text-xs text-[#9b9a97]">This month</p>

      <ul className="mt-4 flex flex-col gap-3.5">
        {categories.map((c) => (
          <li key={c.name}>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#191919]">{c.name}</span>
              <span className="tabular-nums text-[#787774]">{c.amount}</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#f1f1ef]">
              <div
                className="h-full rounded-full bg-[#191919] transition-all"
                style={{ width: `${c.pct}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
