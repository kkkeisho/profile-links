import { DAILY_QUOTES } from "@/config";

export function useDailyQuote(): string {
  const todayIndex = new Date().getDate() % DAILY_QUOTES.length;
  return DAILY_QUOTES[todayIndex];
}

