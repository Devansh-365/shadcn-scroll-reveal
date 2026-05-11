import Link from "next/link"
import { siteConfig } from "@/config/site"

const NAV = "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border py-8">
      <div
        className={`${NAV} flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-between`}
      >
        <p>Built with shadcn/ui and pure CSS Scroll-Driven Animations.</p>
        <Link
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          View source on GitHub
        </Link>
      </div>
    </footer>
  )
}
