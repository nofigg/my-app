import Link from "next/link"
import { Instagram, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 max-w-[700px]">
        <p className="text-sm text-muted-foreground">
          © 2024 N — F. All rights reserved. 🎖️
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://www.instagram.com/poweredbynolan/" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://x.com/poweredbynolan" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
