import { cn } from "@/lib/utils"

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "secondary"
}

const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-3",
}

const variantClasses = {
  default: "border-primary",
  secondary: "border-secondary",
}

export function Spinner({
  size = "md",
  variant = "default",
  className,
  ...props
}: SpinnerProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-t-transparent",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
