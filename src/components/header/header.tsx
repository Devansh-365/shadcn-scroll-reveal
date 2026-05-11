"use client"

import { MainTitle } from "@/components/header/main-title"
import { ModeSwitcher } from "@/components/header/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { useScrollY } from "@/hooks/use-scroll-y"
import { cn } from "@/lib/utils"
import { GitFork } from "lucide-react"
import Link from "next/link"
import HamburgerMenu from "./hamburger-menu"

const SCROLL_TRIGGER = 1

export function Header() {
  const scrollY = useScrollY()
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <MainTitle />
        <div className="hidden items-center gap-x-1 md:flex">
          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "icon", variant: "ghost" }))}
          >
            <GitFork className="size-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <ModeSwitcher />
        </div>
        <HamburgerMenu />
      </div>
      <div
        className={cn(
          "w-full border-b transition-opacity duration-500",
          scrollY >= SCROLL_TRIGGER ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  )
}
