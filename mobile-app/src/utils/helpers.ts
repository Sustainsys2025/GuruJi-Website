// Base URL for loading images from the website
// In production, replace with your CDN or bundle images locally
export const IMAGE_BASE_URL = 'https://gurujicambridge.com';

export function getImageUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${IMAGE_BASE_URL}${path}`;
}

export function getVideoUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${IMAGE_BASE_URL}${path}`;
}

export function formatScheduleDate(dateStr: string): string {
  // Input: "31-Jan-26" -> "31 January 2026"
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const [day, monthAbbr, yearShort] = parts;
  const monthMap: Record<string, string> = {
    Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April',
    May: 'May', Jun: 'June', Jul: 'July', Aug: 'August',
    Sep: 'September', Oct: 'October', Nov: 'November', Dec: 'December',
  };
  const month = monthMap[monthAbbr] || monthAbbr;
  const year = `20${yearShort}`;
  return `${day} ${month} ${year}`;
}

export function isUpcomingDate(dateStr: string): boolean {
  const parts = dateStr.split('-');
  if (parts.length !== 3) return false;
  const [day, monthAbbr, yearShort] = parts;
  const monthMap: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  const month = monthMap[monthAbbr];
  const year = 2000 + parseInt(yearShort, 10);
  const eventDate = new Date(year, month, parseInt(day, 10));
  return eventDate >= new Date();
}

export function openWhatsApp(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  return `https://wa.me/44${cleaned}`;
}

export function openEmail(email: string): string {
  return `mailto:${email}`;
}

export function openMaps(address: string): string {
  return `https://maps.google.com/?q=${encodeURIComponent(address)}`;
}
