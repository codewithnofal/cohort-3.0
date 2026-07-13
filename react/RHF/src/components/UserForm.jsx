import { useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

function UserForm({ setUsers, setToggle, users, updatedUser }) {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updatedUser,
  });

  const formSubmit = (data) => {
    if (updatedUser) {
      setUsers((prev) => {
        const updatedArr = prev.map((u) => {
          return u.id === updatedUser.id ? { ...data } : u;
        });
        localStorage.setItem("users", JSON.stringify(updatedArr));
        return updatedArr;
      });
    } else {
      let arr = [...users, { ...data, id: nanoid() }];
      setUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr));
    }

    reset();
    setToggle((prev) => !prev);
  };
  console.log(errors);
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
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        {errors.name && <p className="text-red-600">{errors.name.message}</p>}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "invalid email type",
              },
            })}
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        {errors.email && <p className="text-red-600">{errors.email.message}</p>}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            {...register("phone", {
              required: "numbaer is required",
              minLength: {
                value: 10,
                message: "minimum 10 digit required",
              },
              maxLength: {
                value: 10,
                message: "maximum 10 digit required",
              },
            })}
            type="number"
            placeholder="Enter your Number"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Image URL
          </label>
          <input
            {...register("image", {
              required: "image is required",
            })}
            type="text"
            placeholder="Paste image URL"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        {errors.image && <p className="text-red-600">{errors.image.message}</p>}

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
