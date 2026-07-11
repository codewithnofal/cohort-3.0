export default function Navbar({setToggle}) {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-slate-800">User Manager</h1>

        <button onClick={() =>setToggle(prev => !prev)} className="rounded-lg cursor-pointer bg-indigo-600 px-5 py-2.5 font-medium text-white transition hover:bg-indigo-700">
          + Create User
        </button>
      </div>
    </nav>
  );
}
