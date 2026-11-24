export function formatKes(amount: number) {
  return `KES ${amount.toLocaleString("en-KE")}`;
}

export function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function formatDate(d: Date) {
  return d.toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" });
}