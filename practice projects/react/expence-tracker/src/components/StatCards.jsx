import { ArrowDownRight, ArrowUpRight, Wallet, CreditCard } from "lucide-react";

const stats = [
  {
    label: "Total balance",
    value: "₹1,24,500",
    change: "+4.2%",
    up: true,
    icon: Wallet,
  },
  {
    label: "Spent this month",
    value: "₹32,400",
    change: "+12.8%",
    up: false,
    icon: CreditCard,
  },
  {
    label: "Saved this month",
    value: "₹17,600",
    change: "+2.1%",
    up: true,
    icon: ArrowUpRight,
  },
];

export default function StatCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map(({ label, value, change, up, icon: Icon }) => (
        <div
          key={label}
          className="rounded-xl border border-[#e9e9e7] bg-white p-4 shadow-[0_1px_2px_rgba(15,15,15,0.06)] transition-shadow hover:shadow-[0_4px_14px_rgba(15,15,15,0.07)]"
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-[#787774]">{label}</p>
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f1f1ef] text-[#191919]">
              <Icon className="h-3.5 w-3.5" />
            </span>
          </div>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-[#191919]">
            {value}
          </p>
          <p
            className={[
              "mt-1.5 inline-flex items-center gap-1 text-xs",
              up ? "text-[#0f7b6c]" : "text-[#e03e3e]",
            ].join(" ")}
          >
            {up ? (
              <ArrowUpRight className="h-3.5 w-3.5" />
            ) : (
              <ArrowDownRight className="h-3.5 w-3.5" />
            )}
            {change}
            <span className="text-[#9b9a97]">vs last month</span>
          </p>
        </div>
      ))}
    </div>
  );
}
