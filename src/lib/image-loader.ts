export function getImagePath(src: string): string {
  if (src.startsWith("http")) return src;
  return src;
}
