import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center max-w-[700px]">
        <Link href="/" className="font-bold text-lg sm:text-xl">
          N — F
        </Link>
        <ModeToggle />
      </div>
    </header>
  )
}
