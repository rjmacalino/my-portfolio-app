"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribeNoop = () => () => {};

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  // Theme is only known client-side; render a stable label until hydrated.
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={
        mounted
          ? `Switch to ${theme === "dark" ? "light" : "dark"} theme`
          : "Toggle theme"
      }
      className={`flex w-[58px] cursor-pointer items-center justify-center border border-border-base px-[0.55rem] py-[0.28rem] font-mono text-[0.68rem] tracking-[0.1em] text-muted transition-colors hover:border-border-hover hover:text-text ${className}`}
    >
      {mounted ? (theme === "dark" ? "DARK" : "LIGHT") : "DARK"}
    </button>
  );
}
