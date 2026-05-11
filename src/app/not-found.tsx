import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      <p className="text-8xl font-bold">404</p>
      <p className="text-xl text-muted-foreground">Page not found</p>
      <Link href="/" className="text-sm underline underline-offset-4 hover:text-foreground text-muted-foreground transition-colors">
        Go back home
      </Link>
    </main>
  )
}
