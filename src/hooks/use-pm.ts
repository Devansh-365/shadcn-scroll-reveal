"use client"

import { useState, useEffect } from "react"

export type PackageManager = "pnpm" | "npm" | "yarn" | "bun"

export function usePM() {
  const [pm, setPM] = useState<PackageManager>("pnpm")

  useEffect(() => {
    const stored = localStorage.getItem("pm") as PackageManager | null
    if (stored) {
      setPM(stored)
    }
  }, [])

  const setPackageManager = (newPM: PackageManager) => {
    setPM(newPM)
    localStorage.setItem("pm", newPM)
  }

  return { pm, setPackageManager }
}
