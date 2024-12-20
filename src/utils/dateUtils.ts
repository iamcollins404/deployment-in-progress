export function get24HoursFromNow(): Date {
  const target = new Date();
  target.setHours(target.getHours() + 24);
  return target;
}

export function getTimeRemainingMs(endDate: Date): number {
  const now = new Date();
  return endDate.getTime() - now.getTime();
}

export function msToPercentage(remainingMs: number, totalMs: number): number {
  const progress = ((totalMs - remainingMs) / totalMs) * 100;
  return Math.min(100, Math.max(0, progress));
}