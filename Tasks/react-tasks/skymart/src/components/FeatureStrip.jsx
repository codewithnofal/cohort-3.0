import { Shield, Tag, Zap } from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    subtitle: "Same-day on select items",
    icon: <Zap className="h-5 w-5" />,
    iconColor: "text-lime-300",
  },
  {
    title: "Secure Payments",
    subtitle: "100% encrypted checkout",
    icon: <Shield className="h-5 w-5" />,
    iconColor: "text-blue-400",
  },
  {
    title: "Best Prices",
    subtitle: "Price-match guarantee",
    icon: <Tag className="h-5 w-5" />,
    iconColor: "text-emerald-400",
  },
];

export function FeatureStrip() {
  return (
    <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="flex items-center gap-3 mb-5 rounded-2xl border border-white/10 bg-zinc-900/70 p-4 transition-colors duration-300 hover:border-lime-400/40 sm:gap-4 sm:rounded-3xl sm:p-5"
        >
          <span className={"shrink-0 " + feature.iconColor}>{feature.icon}</span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight text-zinc-50">
              {feature.title}
            </p>
            <p className="mt-0.5 truncate text-xs text-zinc-400 sm:text-sm">{feature.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureStrip;
