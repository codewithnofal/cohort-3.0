import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({});
  console.log(formData)

  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-slate-800 text-center">
          Create Account
        </h2>

        <p className="mt-2 text-center text-sm text-slate-500">
          Fill in your details to get started.
        </p>

        <form className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>

            <input
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border text-black border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>

            <input
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border text-black border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm text-black font-medium text-slate-700">
              Password
            </label>

            <input
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-300 text-black px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?
          <span className="ml-1 cursor-pointer font-medium text-blue-600 hover:underline">
            Login
          </span>
        </p>
      </div>
      {/* <p className="text-xl text-black">name: {name}</p>
      <p className="text-xl text-black">email: {email} </p>
      <p className="text-xl text-black">password : {password}</p> */}
    </div>
  );
}

export default Form;
