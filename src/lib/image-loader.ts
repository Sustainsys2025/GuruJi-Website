const BASE_PATH = "/GuruJi-Website";

export function getImagePath(src: string): string {
  if (src.startsWith("http")) return src;
  if (src.startsWith(BASE_PATH)) return src;
  return `${BASE_PATH}${src}`;
}
