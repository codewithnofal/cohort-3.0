import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCards from "./components/StatCards";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import CategoryBreakdown from "./components/CategoryBreakdown";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div>
        <Topbar />
        <main>
          <StatCards />
          <AddExpense />
          <div className="grid grid-cols-[1.7fr_1fr]">
            <ExpenseList />
            <CategoryBreakdown />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
