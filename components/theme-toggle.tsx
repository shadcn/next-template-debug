"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      >
        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
        <path d="M12 3v1"></path>
        <path d="M12 20v1"></path>
        <path d="M3 12h1"></path>
        <path d="M20 12h1"></path>
        <path d="m18.364 5.636-.707.707"></path>
        <path d="m6.343 17.657-.707.707"></path>
        <path d="m5.636 5.636.707.707"></path>
        <path d="m17.657 17.657.707.707"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      >
        <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
