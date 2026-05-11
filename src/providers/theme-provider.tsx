"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export default function ThemeProvider(
  props: Omit<ThemeProviderProps, "children"> & {
    children: React.ReactNode
  }
) {
  return <NextThemesProvider {...props} />
}
