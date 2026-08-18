import { Plus, Calendar, IndianRupee, Tag } from "lucide-react";

export default function AddExpense() {
  return (
    <div className="rounded-xl border border-[#e9e9e7] bg-white p-4 shadow-[0_1px_2px_rgba(15,15,15,0.06)]">
      <p className="mb-3 text-sm font-medium text-[#191919]">Add expense</p>

      <div className="grid gap-2.5 md:grid-cols-[1.6fr_1fr_1fr_1fr_auto]">
        {/* Title */}
        <input
          type="text"
          placeholder="What did you spend on?"
          className="rounded-lg border border-[#e9e9e7] bg-white px-3 py-2 text-sm text-[#191919] placeholder:text-[#9b9a97] transition-colors focus:border-[#b8b8b5] focus:outline-none"
        />

        {/* Amount */}
        <div className="flex items-center gap-1.5 rounded-lg border border-[#e9e9e7] bg-white px-3 py-2 transition-colors focus-within:border-[#b8b8b5]">
          <IndianRupee className="h-3.5 w-3.5 text-[#9b9a97]" />
          <input
            type="text"
            placeholder="0.00"
            className="w-full bg-transparent text-sm text-[#191919] placeholder:text-[#9b9a97] focus:outline-none"
          />
        </div>

        {/* Category */}
        <div className="flex items-center gap-1.5 rounded-lg border border-[#e9e9e7] bg-white px-3 py-2 transition-colors focus-within:border-[#b8b8b5]">
          <Tag className="h-3.5 w-3.5 text-[#9b9a97]" />
          <select className="w-full bg-transparent text-sm text-[#191919] focus:outline-none">
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Other</option>
          </select>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1.5 rounded-lg border border-[#e9e9e7] bg-white px-3 py-2 transition-colors focus-within:border-[#b8b8b5]">
          <Calendar className="h-3.5 w-3.5 text-[#9b9a97]" />
          <input
            type="date"
            className="w-full bg-transparent text-sm text-[#191919] focus:outline-none"
          />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#191919] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 active:opacity-80"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </div>
    </div>
  );
}
