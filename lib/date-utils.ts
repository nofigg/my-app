import { format, formatDistanceToNow } from "date-fns"

export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date
  return format(d, "MMMM d, yyyy")
}

export function formatDateTime(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date
  return format(d, "MMMM d, yyyy 'at' h:mm a")
}

export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date
  return formatDistanceToNow(d, { addSuffix: true })
}

export function isValidDate(date: any): boolean {
  if (!date) return false
  const d = new Date(date)
  return d instanceof Date && !isNaN(d.getTime())
}
