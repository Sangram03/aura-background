/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pattern } from "@/components/types/pattern";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ---------------------- Debounce Utility ---------------------- */
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  timeout: number
) {
  let handle: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(handle);
    handle = setTimeout(() => fn(...args), timeout);
  };
}

/* ---------------------- Pattern Search Utility ---------------------- */
export function searchPatterns(
  gridPatterns: Pattern[],
  category: string,
  searchInput: string
) {
  if (!searchInput.trim()) return gridPatterns;

  const loweredInput = searchInput.toLowerCase();
  const inputWords = loweredInput.split(" ").filter(Boolean);

  const filteredPatterns = gridPatterns.filter((pattern) => {
    // Match category or "all"
    if (category !== "all" && pattern.category !== category) return false;

    const patternWords = pattern.name.toLowerCase().split(" ");

    // If user typed only 1 letter — match only first word startsWith
    if (inputWords.length === 1 && inputWords[0].length === 1) {
      return patternWords.some((w) => w.startsWith(inputWords[0]));
    }

    // Normal multi-word matching
    return inputWords.every((inputWord) =>
      patternWords.some((patternWord) =>
        patternWord.startsWith(inputWord)
      )
    );
  });

  // Sorting patterns based on relevance
  const sortedPatterns = filteredPatterns.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();

    const posA = aName.indexOf(inputWords[0]);
    const posB = bName.indexOf(inputWords[0]);

    // Items that include the word should come first
    if (posA === -1 && posB !== -1) return 1;
    if (posB === -1 && posA !== -1) return -1;

    return posA - posB;
  });

  return sortedPatterns;
}
