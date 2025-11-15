export const PATTERN_CATEGORIES = [
  { id: "all", label: "All Patterns" },
  { id: "gradients", label: "Gradients" },
  { id: "geometric", label: "Geometric" },
  { id: "decorative", label: "Decorative" },
  { id: "effects", label: "Effects" },
  { id: "favourites", label: "Favourites" },
] as const;

export const THEME_CONFIG = {
  light: "light",
  dark: "dark",
} as const;

export const SUPPORT_CONFIG = {
  UPI_ID: "",
  PAYEE_NAME: "",
  UPI_MSG: "Keep building cool stuff!",
  BUY_ME_COFFEE_URL: "",
} as const;

export const APP_CONFIG = {
  GITHUB_URL: "https://github.com/Sangram03/aura-background",
  TWITTER_URL: "https://twitter.com/",
  CONTRIBUTING_URL: "https://github.com/",
} as const;
