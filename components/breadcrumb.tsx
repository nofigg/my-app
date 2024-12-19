import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbProps {
  pageName: string
}

export function Breadcrumb({ pageName }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base mb-4" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
        <Home className="h-4 w-4" />
      </Link>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
      <span className="font-serif text-foreground">{pageName}</span>
    </nav>
  )
}
