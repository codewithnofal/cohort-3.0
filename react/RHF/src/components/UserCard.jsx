export default function UserCard({
  user,
  ind,
  deleteUser,
  setToggle,
  setUpdatedUser,
}) {
  return (
    <div className="overflow-hidden w-[300px] h-[400px] rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <img src={user.userImage} alt="User" className="h-40  object-cover" />

      <div className="space-y-3 p-3">
        <h2 className="text-2xl font-bold text-slate-800">{user.userName}</h2>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Email
          </p>
          <p className="text-slate-700">{user.userEmail}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Phone
          </p>
          <p className="text-slate-700">{user.userPassword}</p>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={() => {
              setUpdatedUser(user);
              setToggle((prev) => !prev);
            }}
            className="flex-1 rounded-lg bg-amber-500 py-2 font-medium text-white transition hover:bg-amber-600"
          >
            Update
          </button>

          <button
            onClick={() => deleteUser(ind)}
            className="flex-1 rounded-lg bg-red-500 py-2 font-medium text-white transition hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
