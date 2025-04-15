"use client";

import { ThemeProvider } from "@jutro/theme";
import { useEffect, useState } from "react";

export const JutroThemeClient = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
};
