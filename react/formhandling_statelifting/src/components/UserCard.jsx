export default function UserCard({val}) {
 
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
      <img
        src={val.image}
        alt="User"
        className="h-56 w-full object-cover"
      />

      <div className="space-y-3 p-6">
        <h2 className="text-2xl font-bold text-slate-800">{val.name}</h2>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">Email</p>
          <p className="text-slate-700">{val.email}</p>
        </div>

        <div className="flex gap-3 pt-4">
          <button className="flex-1 rounded-lg bg-indigo-600 py-2 text-white transition hover:bg-indigo-700">
            Edit
          </button>

          <button onClick={(e) => console.log(e)} className="flex-1 rounded-lg bg-red-500 py-2 text-white transition hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
