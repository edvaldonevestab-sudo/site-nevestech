import React from "react";
import type { PropsWithChildren } from "react";

type Variant = "solid" | "outline";

export function Tag({ children, variant = "solid" }: PropsWithChildren<{ variant?: Variant }>) {
  const base = "inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-wide";

  const styles =
    variant === "solid"
      ? "bg-brand-900/60 text-brand-200"
      : "border border-brand-500/60 text-brand-200";

  return <span className={`${base} ${styles}`}>{children}</span>;
}
