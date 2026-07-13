export default function UserCard({ user, handleDelete, setUpdatedUser, setToggle }) {
  return (
    <div className="overflow-hidden w-[300px] h-[400px] rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <img src={user.image} alt="User" className="h-40  object-cover" />

      <div className="space-y-3 p-3">
        <h2 className="text-2xl font-bold text-slate-800">{user.name}</h2>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Email
          </p>
          <p className="text-slate-700">{user.email}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Phone
          </p>
          <p className="text-slate-700">{user.phone}</p>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={() => {
              setUpdatedUser(() => user);
              setToggle((prev) => !prev);
            }}
            className="flex-1 rounded-lg bg-amber-500 py-2 font-medium text-white transition hover:bg-amber-600"
          >
            Update
          </button>

          <button
            onClick={() => handleDelete(user.id)}
            className="flex-1 rounded-lg bg-red-500 py-2 font-medium text-white transition hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
