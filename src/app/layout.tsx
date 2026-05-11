import type { Metadata, Viewport } from "next"
import { ibmPlexSans, jetbrainsMono } from "@/lib/fonts"
import ThemeProvider from "@/providers/theme-provider"
import { Header } from "@/components/header"
import Footer from "@/components/footer/footer"
import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import "./globals.css"

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

export const viewport: Viewport = {
  colorScheme: "dark light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          ibmPlexSans.variable,
          jetbrainsMono.variable,
          "antialiased bg-background text-foreground min-h-screen flex flex-col"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
