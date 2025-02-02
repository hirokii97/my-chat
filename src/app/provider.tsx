"use client";

import { Provider } from "jotai";
import { ReactNode } from "react";

export default function RecoilProvider({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}
