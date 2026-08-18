import {
  LayoutDashboard,
  Wallet,
  PieChart,
  Repeat,
  Target,
  Settings,
  LogOut,
} from "lucide-react";

// Pure UI. Saari styling yahin Tailwind classes se.
const nav = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Expenses", icon: Wallet },
  { label: "Analytics", icon: PieChart },
  { label: "Recurring", icon: Repeat },
  { label: "Budgets", icon: Target },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 shrink-0 flex-col border-r border-[#e9e9e7] bg-[#fcfcfb] px-4 py-6">
      {/* Brand */}
      <div className="mb-8 flex items-center gap-2.5 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#191919] bg-white text-base shadow-[2px_2px_0_0_#191919]">
          💸
        </div>
        <div>
          <p className="text-sm font-semibold leading-tight text-[#191919]">
            Spendly
          </p>
          <p className="text-[11px] leading-tight text-[#9b9a97]">
            personal finance
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        <p className="mb-1 px-2 text-[11px] font-medium uppercase tracking-wider text-[#9b9a97]">
          Menu
        </p>
        {nav.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            className={[
              "group flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors",
              active
                ? "bg-[#f1f1ef] font-medium text-[#191919]"
                : "text-[#787774] hover:bg-[#f7f7f5] hover:text-[#191919]",
            ].join(" ")}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-8 flex flex-col gap-1">
        <p className="mb-1 px-2 text-[11px] font-medium uppercase tracking-wider text-[#9b9a97]">
          General
        </p>
        <button
          type="button"
          className="flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-[#787774] transition-colors hover:bg-[#f7f7f5] hover:text-[#191919]"
        >
          <Settings className="h-4 w-4" />
          Settings
        </button>
        <button
          type="button"
          className="flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-[#787774] transition-colors hover:bg-[#f7f7f5] hover:text-[#191919]"
        >
          <LogOut className="h-4 w-4" />
          Log out
        </button>
      </div>

      {/* Budget card */}
      <div className="mt-auto rounded-xl border border-[#e9e9e7] bg-white p-3.5 shadow-[0_1px_2px_rgba(15,15,15,0.06)]">
        <p className="text-xs font-medium text-[#191919]">Monthly budget</p>
        <p className="mt-1 text-[11px] text-[#9b9a97]">₹32,400 of ₹50,000</p>
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[#f1f1ef]">
          <div className="h-full w-[65%] rounded-full bg-[#191919]" />
        </div>
      </div>
    </aside>
  );
}