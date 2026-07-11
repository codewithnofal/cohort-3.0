import { useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";

function UserForm({ setUsers , setToggle}) {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = (data) => {
    setUsers(prev => [...prev, data])
    reset();
    setToggle(prev => !prev)
  };

  return (
    <div className="w-full max-w-lg h-[90%] rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="mb-3 text-center text-3xl font-bold text-slate-800">
        Add User
      </h2>

      <form onSubmit={handleSubmit(formSubmit)} className="space-y-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            {...register("userName", {
              required: "name is required",
            })}
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        {errors.userName && (
          <p className="text-red-600">{errors.userName.message}</p>
        )}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            {...register("userEmail", {
              required: "email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "please enter valid email",
              },
            })}
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        {errors.userEmail && (
          <p className="text-red-600">{errors.userEmail.message}</p>
        )}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            {...register("userPassword", {
              required: "password is required",
              minLength: {
                value: 10,
                message: "min 10 digits are required",
              },
              maxLength: {
                value: 10,
                message: "max 10 digits are required",
              },
            })}
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        {errors.userPassword && (
          <p className="text-red-600">{errors.userPassword.message}</p>
        )}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Image URL
          </label>
          <input
            {...register("userImage", {
              required: "image is required",
            })}
            type="text"
            placeholder="Paste image URL"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        {errors.userImage && (
          <p className="text-red-600">{errors.userImage.message}</p>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Add User
        </button>
      </form>
    </div>
  );
}
export default UserForm;
