"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModeSwitcher() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button size="icon" variant="ghost" onClick={toggleTheme}>
      <Sun className="size-4 dark:hidden" />
      <Moon className="size-4 hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
