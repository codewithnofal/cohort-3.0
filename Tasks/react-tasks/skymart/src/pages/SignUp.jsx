import { User, Mail, Lock, Eye, ArrowRight, Zap } from "lucide-react";
import { useContext } from "react";
import { AuthStore } from "../context/AuthContext";
import { useForm, Watch } from "react-hook-form";
function SignUp() {
  const { users, setUsers } = useContext(AuthStore);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm({ mode: "onChange" });

  console.log(errors);

  const formSubmit = (data) => {
    const newUser = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      password: data.password,
      cart: [],
      wishlist: [],
      orders: [],
    };
    setUsers([...users, newUser])
    reset();
  };
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      <div className="flex items-center gap-3 mb-10">
        <div className="h-11 w-11 rounded-xl bg-[#c6f24e] flex items-center justify-center">
          <Zap className="h-6 w-6 text-black" fill="black" strokeWidth={2.5} />
        </div>
        <span className="text-2xl font-bold tracking-tight">
          Sky<span className="text-[#c6f24e]">Mart</span>
        </span>
      </div>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-neutral-950/60 p-8 lg:p-10 backdrop-blur"
      >
        <h2 className=" text-2xl sm:text-3xl font-bold tracking-tight">
          Create account
        </h2>
        <p className="mt-1 text-sm text-neutral-500">
          Join SkyMart and start shopping
        </p>
        <div className="mt-8 space-y-4">
          <div className="relative flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 focus-within:border-[#c6f24e]/50 transition">
            <span className="mr-3 text-neutral-500">
              <User className="h-4 w-4" />
            </span>
            <input
              {...register("name", {
                required: "name is required !",
              })}
              type="text"
              placeholder="Full name"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 outline-none"
            />
          </div>
          <div className="relative flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 focus-within:border-[#c6f24e]/50 transition">
            <span className="mr-3 text-neutral-500">
              <Mail className="h-4 w-4" />
            </span>
            <input
              {...register("email", {
                required: "email is required!",
              })}
              type="email"
              required
              placeholder="Email address"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 outline-none"
            />
          </div>
          <div className="relative flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 focus-within:border-[#c6f24e]/50 transition">
            <span className="mr-3 text-neutral-500">
              <Lock className="h-4 w-4" />
            </span>
            <input
              {...register("password", {
                required: "Password is required!",
              })}
              type="password"
              placeholder="Password (min 6 chars)"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 outline-none"
            />
            <span className="ml-3 text-neutral-500">
              <Eye className="h-4 w-4" />
            </span>
          </div>
          <div className="relative flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 focus-within:border-[#c6f24e]/50 transition">
            <span className="mr-3 text-neutral-500">
              <Lock className="h-4 w-4" />
            </span>
            <input
              {...register("confirmPassword", {
                required: "confirm password is required!",
                validate: (value) => {
                  return (
                    value === getValues("password") || "Password does not match"
                  );
                },
              })}
              type="password"
              placeholder="Confirm password"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#c6f24e] px-4 py-3.5 text-sm font-semibold text-black transition hover:brightness-110"
          >
            Create Account <ArrowRight className="h-4 w-4" />
          </button>
          <p className="pt-2 text-center text-sm text-neutral-500">
            Already have an account?{" "}
            <a
              href="/"
              className="font-semibold text-[#c6f24e] hover:underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
