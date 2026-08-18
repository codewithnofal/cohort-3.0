import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StatCards from "./StatCards";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import CategoryBreakdown from "./CategoryBreakdown";

// Pure UI, no logic. Saari styling Tailwind classes se, component ke andar hi.
export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#ffffff] font-sans">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />

        <main className="flex-1 px-4 py-6 md:px-6 md:py-8">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight text-[#191919]">
                Dashboard
              </h1>
              <p className="mt-1.5 text-sm text-[#787774]">
                A calm overview of where your money went this month.
              </p>
            </div>

            <StatCards />

            <div className="mt-5">
              <AddExpense />
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1.7fr_1fr]">
              <ExpenseList />
              <CategoryBreakdown />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
