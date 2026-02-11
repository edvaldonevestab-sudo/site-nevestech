import React from "react";
import type { PropsWithChildren } from "react";

export function Section({ children }: PropsWithChildren) {

  return <section className="py-16 sm:py-20">{children}</section>;
}
