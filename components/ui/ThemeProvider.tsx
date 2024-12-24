import * as React from "react";
import { NextThemesProvider, ThemeProviderProps } from "next-themes";

export function ThemeProvider({
  children,
  attribute, // Ensure attribute is of the correct type
  ...props
}: ThemeProviderProps & { attribute: string }) {
  return (
    <NextThemesProvider {...props} attribute={attribute}>
      {children}
    </NextThemesProvider>
  );
}
