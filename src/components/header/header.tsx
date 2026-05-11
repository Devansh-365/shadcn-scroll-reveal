"use client"

import { Logo } from "@/components/header/logo"
import { ModeSwitcher } from "@/components/header/theme-toggle"
import { siteConfig } from "@/config/site"
import { useScrollY } from "@/hooks/use-scroll-y"
import { cn } from "@/lib/utils"
import Link from "next/link"
import HamburgerMenu from "./hamburger-menu"

const SCROLL_TRIGGER = 1
const NAV = "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"

export function Header() {
  const scrollY = useScrollY()
  return (
    <header className="sticky top-0 z-40 w-full bg-background/85 backdrop-blur-sm">
      <div className={cn(NAV, "flex h-14 items-center justify-between")}>
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
          <ModeSwitcher />
        </div>

        <HamburgerMenu />
      </div>

      <div
        className={cn(
          "border-b border-border transition-opacity duration-500",
          scrollY >= SCROLL_TRIGGER ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  )
}
