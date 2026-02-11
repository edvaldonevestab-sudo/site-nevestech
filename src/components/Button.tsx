import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Variant = "primary" | "outline";

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
  }
>;

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none";

  const styles =
    variant === "primary"
      ? "bg-brand-500 text-zinc-950 hover:bg-brand-400"
      : "border border-brand-500 text-brand-500 hover:bg-brand-500/10";

  return <button className={`${base} ${styles} ${className}`.trim()} {...props} />;
}
