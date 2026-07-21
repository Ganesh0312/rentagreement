export const INDIAN_STATES = [
  { code: "MH", name: "Maharashtra" },
  { code: "DL", name: "Delhi" },
  { code: "KA", name: "Karnataka" },
  { code: "TN", name: "Tamil Nadu" },
  { code: "GJ", name: "Gujarat" },
  { code: "RJ", name: "Rajasthan" },
  { code: "UP", name: "Uttar Pradesh" },
  { code: "WB", name: "West Bengal" },
  { code: "TG", name: "Telangana" },
  { code: "AP", name: "Andhra Pradesh" },
] as const;

export type StateCode = (typeof INDIAN_STATES)[number]["code"];
