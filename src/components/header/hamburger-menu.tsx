"use client"

import { Menu, GitFork, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"

export default function HamburgerMenu() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger render={<Button size="icon" variant="ghost" />}>
          <Menu className="size-4" />
          <span className="sr-only">Open menu</span>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-4 p-4 pt-10">
            <Link
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-foreground/80 transition-colors"
            >
              <GitFork className="size-4" />
              GitHub
            </Link>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-sm font-medium hover:text-foreground/80 transition-colors text-left"
            >
              {theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
