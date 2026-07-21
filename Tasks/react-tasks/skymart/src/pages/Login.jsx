import { Zap, Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthStore } from "../context/AuthContext";
import { toast } from "sonner";
function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  let { users, currentUser, setCurrentUser } = useContext(AuthStore);

  const formSubmit = (data) => {
    let currUser = users.find((u) => {
      return u.email === data.email && u.password === data.password;
    });

    if (!currUser) {
      toast.error("user not found please register!");
      return;
    }
    setCurrentUser(currUser);
    localStorage.setItem("currUser", JSON.stringify(currUser));
    reset();
    toast.success("Login Successfull");
    navigate("/home");
  };

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const onError = (errors) => {
    if (errors.email) {
      toast.error(errors.email.message);
    }

    if (errors.password) {
      toast.error(errors.password.message);
    }
  };

  onError(errors);

  let navigate = useNavigate();
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-black text-white">
      {/* Left hero */}
      <div className="relative hidden sm:flex flex-col justify-between p-10 lg:p-16 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, #c6f24e 0%, transparent 70%)",
          }}
        />
        <div className="relative flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-[#c6f24e] flex items-center justify-center">
            <Zap
              className="h-6 w-6 text-black"
              fill="black"
              strokeWidth={2.5}
            />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            Sky<span className="text-[#c6f24e]">Mart</span>
          </span>
        </div>
        <div className="relative py-16 lg:py-0">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#c6f24e] mb-6">
            WELCOME BACK
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
            Shop the future.
            <br />
            <span className="text-[#c6f24e]">Today.</span>
          </h1>
          <p className="mt-6 max-w-md text-neutral-400 text-base leading-relaxed">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-5 text-center">
              <div className="text-2xl font-bold text-[#c6f24e]">20K+</div>
              <div className="mt-1 text-xs text-neutral-500">Products</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-5 text-center">
              <div className="text-2xl font-bold text-[#c6f24e]">50K+</div>
              <div className="mt-1 text-xs text-neutral-500">Users</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-5 text-center">
              <div className="text-2xl font-bold text-[#c6f24e]">4.9★</div>
              <div className="mt-1 text-xs text-neutral-500">Rating</div>
            </div>
          </div>
        </div>
        <div className="relative text-xs text-neutral-600">
          © 2026 SkyMart. All rights reserved.
        </div>
      </div>
      {/* Right form */}
      <div className="flex items-center justify-center p-6 lg:p-16">
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="w-full max-w-md rounded-3xl border border-white/10 bg-neutral-950/60 p-8 lg:p-10 backdrop-blur"
        >
          <h2 className="text-3xl font-bold tracking-tight">Sign in</h2>
          <p className="mt-1 text-sm text-neutral-500">
            Enter your credentials to continue
          </p>
          <div className="mt-8 space-y-4">
            <div className="relative flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3.5 focus-within:border-[#c6f24e]/50 transition">
              <span className="mr-3 text-neutral-500">
                <Mail className="h-4 w-4" />
              </span>
              <input
                {...register("email")}
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 outline-none"
              />
            </div>
            <div className="relative flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3.5 focus-within:border-[#c6f24e]/50 transition">
              <span className="mr-3 text-neutral-500">
                <Lock className="h-4 w-4" />
              </span>
              <input
                {...register("password", {})}
                type="password"
                placeholder="Password"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 outline-none"
              />
              <span className="ml-3 text-neutral-500">
                <Eye className="h-4 w-4" />
              </span>
            </div>
            <button
              type="submit"
              className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#c6f24e] px-4 py-3.5 text-sm font-semibold text-black transition hover:brightness-110"
            >
              Sign in <ArrowRight className="h-4 w-4" />
            </button>
            <p className="pt-2 text-center text-sm text-neutral-500">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="font-semibold cursor-pointer text-[#c6f24e] hover:underline"
              >
                Create one
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
