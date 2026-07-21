// src/utils/formatDate.ts
type DateStyle = "long" | "medium" | "short" | "compact"

const dateStyles: Record<DateStyle, Intl.DateTimeFormatOptions> = {
  long: { dateStyle: "long" },
  medium: { dateStyle: "medium" },
  short: { dateStyle: "short" },
  compact: { year: "numeric", month: "2-digit" },
}

export function formatDate(
  date: Date,
  style: DateStyle = "long",
  options?: Intl.DateTimeFormatOptions
) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    ...dateStyles[style],
    ...options,
  }).format(date)
}
