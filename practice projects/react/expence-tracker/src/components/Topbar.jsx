import { Search, Bell, Menu } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-[#e9e9e7] bg-white/80 px-4 py-3 backdrop-blur md:px-6">
      <button
        type="button"
        aria-label="Open menu"
        className="rounded-md p-1.5 text-[#787774] transition-colors hover:bg-[#f1f1ef] hover:text-[#191919] md:hidden"
      >
        <Menu className="h-4 w-4" />
      </button>

      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-[#e9e9e7] bg-[#fcfcfb] px-3 py-1.5 transition-colors focus-within:border-[#b8b8b5] sm:max-w-sm">
        <Search className="h-3.5 w-3.5 shrink-0 text-[#9b9a97]" />
        <input
          type="text"
          placeholder="Search expenses…"
          className="w-full bg-transparent text-sm text-[#191919] placeholder:text-[#9b9a97] focus:outline-none"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          aria-label="Notifications"
          className="rounded-md p-1.5 text-[#787774] transition-colors hover:bg-[#f1f1ef] hover:text-[#191919]"
        >
          <Bell className="h-4 w-4" />
        </button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#191919] text-xs font-medium text-white">
          N
        </div>
      </div>
    </header>
  );
}
