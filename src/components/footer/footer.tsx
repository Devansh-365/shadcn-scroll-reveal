import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-16">
      <div className="container flex flex-col items-center gap-2 text-sm text-muted-foreground">
        <p>Built with ♥ using shadcn/ui and pure CSS</p>
        <Link
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          GitHub
        </Link>
      </div>
    </footer>
  )
}
