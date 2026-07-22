import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  Heart,
  ArrowRight,
} from "lucide-react";
const stats = [
  { icon: Package, value: "20K+", label: "Products" },
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Star, value: "4.9", label: "Avg. Rating" },
  { icon: Truck, value: "99%", label: "On-time Delivery" },
];
const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    desc: "Every product is verified for quality and authenticity before listing.",
  },
  {
    icon: Truck,
    title: "Speed",
    desc: "We obsess over delivery times so your orders arrive when promised.",
  },
  {
    icon: Heart,
    title: "Community",
    desc: "Built around real customer feedback, not just business metrics.",
  },
  {
    icon: Star,
    title: "Quality",
    desc: "We curate the best — no filler, no junk, just great products.",
  },
];
const team = [
  {
    name: "Aryan Shah",
    role: "Founder & CEO",
    initial: "A",
    bg: "bg-[#c6f24e]",
    fg: "text-black",
  },
  {
    name: "Priya Mehta",
    role: "Head of Product",
    initial: "P",
    bg: "bg-blue-500",
    fg: "text-white",
  },
  {
    name: "Rohan Verma",
    role: "Lead Engineer",
    initial: "R",
    bg: "bg-purple-500",
    fg: "text-white",
  },
  {
    name: "Sneha Kapoor",
    role: "Design Director",
    initial: "S",
    bg: "bg-rose-500",
    fg: "text-white",
  },
];
function AboutUs() {
  return (
    <section className="bg-black text-white px-6 lg:px-12 py-16">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="mx-auto h-16 w-16 rounded-2xl bg-[#c6f24e] flex items-center justify-center">
          <Zap className="h-8 w-8 text-black" fill="black" strokeWidth={2.5} />
        </div>
        <h1 className="mt-8 text-5xl lg:text-6xl font-bold tracking-tight">
          About <span className="text-[#c6f24e]">SkyMart</span>
        </h1>
        <p className="mt-6 text-neutral-400 text-base lg:text-lg leading-relaxed">
          SkyMart is a next-generation e-commerce platform built to make online
          shopping fast, fair, and enjoyable — for everyone.
        </p>
      </div>
      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center"
            >
              <Icon className="h-6 w-6 text-[#c6f24e] mx-auto" />
              <div className="mt-3 text-3xl lg:text-4xl font-bold">
                {s.value}
              </div>
              <div className="mt-1 text-xs lg:text-sm text-neutral-500">
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
      {/* Our Story */}
      <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8 lg:p-12">
        <h2 className="text-2xl lg:text-3xl font-bold">Our Story</h2>
        <div className="mt-6 space-y-4 text-neutral-400 leading-relaxed text-sm lg:text-base">
          <p>
            SkyMart started in 2022 as a small side project — two engineers
            tired of bloated, slow e-commerce experiences. We asked ourselves:
            what if shopping online was actually{" "}
            <em className="text-neutral-200">enjoyable</em>?
          </p>
          <p>
            Three years later, SkyMart serves over 50,000 customers across the
            country. We stock electronics, fashion, jewelry, and everyday
            essentials — all at prices that don't require a second mortgage.
          </p>
          <p>
            We're still the same team at heart: obsessed with speed,
            transparency, and making you feel good about every purchase you make
            here.
          </p>
        </div>
      </div>
      {/* What We Stand For */}
      <div className="mt-16">
        <h2 className="text-2xl lg:text-3xl font-bold text-center">
          What We Stand For
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#c6f24e]/40 transition"
              >
                <div className="h-12 w-12 shrink-0 rounded-xl bg-[#c6f24e]/10 border border-[#c6f24e]/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#c6f24e]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm text-neutral-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Meet the Team */}
      <div className="mt-16">
        <h2 className="text-2xl lg:text-3xl font-bold text-center">
          Meet the Team
        </h2>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center hover:border-[#c6f24e]/40 transition"
            >
              <div
                className={`mx-auto h-16 w-16 rounded-2xl ${m.bg} ${m.fg} flex items-center justify-center text-2xl font-bold`}
              >
                {m.initial}
              </div>
              <div className="mt-4 text-sm font-semibold">{m.name}</div>
              <div className="mt-1 text-xs text-neutral-500">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div className="mt-16 rounded-3xl border border-[#c6f24e]/40 bg-[#c6f24e]/[0.03] p-10 lg:p-14 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">Ready to shop?</h2>
        <p className="mt-3 text-neutral-400 text-sm lg:text-base">
          Explore thousands of products at unbeatable prices.
        </p>
        <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c6f24e] px-7 py-3.5 text-sm font-bold text-black hover:brightness-110">
          Browse Products <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
export default AboutUs;
