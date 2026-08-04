import { ShoppingBag, User, Lock } from "lucide-react";
import { useAuth } from "../../hooks/useAuthHook";

export default function Login() {
  const { register, handleSubmit, loginForm, navigate, errors } = useAuth();

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-5">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-8">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-2xl bg-[#C6F24E] flex items-center justify-center">
            <ShoppingBag className="h-8 w-8 text-black" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-white">
          Welcome Back
        </h1>

        <p className="text-neutral-400 text-center mt-2 mb-8">
          Login to continue shopping.
        </p>

        <form onSubmit={handleSubmit(loginForm)} className="space-y-5">
          <div>
            <label className="text-sm text-neutral-400 mb-2 block">
              Username
            </label>

            <div className="flex items-center rounded-2xl border border-white/10 bg-white/3 px-4">
              <User className="text-neutral-500 h-5 w-5" />

              <input
                {...register("username", {
                  required: "name is required",
                })}
                type="text"
                placeholder="Enter username"
                className="w-full bg-transparent px-3 py-4 text-white outline-none placeholder:text-neutral-600"
              />
            </div>
            {errors.name && (
              <p className="text-xs text-red-500 ">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm text-neutral-400 mb-2 block">
              Password
            </label>

            <div className="flex items-center rounded-2xl border border-white/10 bg-white/3 px-4">
              <Lock className="text-neutral-500 h-5 w-5" />

              <input
                {...register("password", {
                  required: "password is required",
                })}
                type="password"
                placeholder="Enter password"
                className="w-full bg-transparent px-3 py-4 text-white outline-none placeholder:text-neutral-600"
              />
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 ">{errors.password.message}</p>
            )}
          </div>

          <button className="w-full bg-[#C6F24E] text-black font-bold rounded-2xl py-4 hover:brightness-110 transition">
            Login
          </button>

          <p className="text-center text-sm text-neutral-400">
            Don't have an account?
            <span className="text-[#C6F24E] cursor-pointer ml-1">Register</span>
          </p>
        </form>
      </div>
    </div>
  );
}
