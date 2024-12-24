"use client"

import * as React from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import type { ThemeProviderProps as NextThemeProviderProps } from "next-themes"

interface ThemeProviderProps extends Omit<NextThemeProviderProps, "children"> {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider {...props}>
      {children}
    </NextThemeProvider>
  )
}
