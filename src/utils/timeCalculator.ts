import { get24HoursFromNow, getTimeRemainingMs, msToPercentage } from './dateUtils';

export function calculateDeploymentProgress(): number {
  const target = get24HoursFromNow();
  const totalMs = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  const remainingMs = getTimeRemainingMs(target);
  
  return msToPercentage(remainingMs, totalMs);
}