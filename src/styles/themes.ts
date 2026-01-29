export type ThemeId =
  | "aurora"
  | "mono"
  | "citrus"
  | "ink"
  | "sand"
  | "studio"
  | "lake";

export type ThemeDefinition = {
  label: string;
  vars: Record<string, string>;
};

export const themes: Record<ThemeId, ThemeDefinition> = {
  aurora: {
    label: "Aurora",
    vars: {
      "--bg": "#f6f7fb",
      "--bg-accent": "#e9f5ff",
      "--text": "#12131a",
      "--muted": "#4b5563",
      "--primary": "#1f4fff",
      "--secondary": "#0f766e",
      "--card": "#ffffff",
      "--border": "#e5e7eb",
      "--shadow": "0 12px 30px rgba(31, 79, 255, 0.15)",
      "--pattern": "radial-gradient(circle at 20% 20%, rgba(31, 79, 255, 0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(15, 118, 110, 0.18), transparent 40%)"
    }
  },
  mono: {
    label: "Mono",
    vars: {
      "--bg": "#f4f4f2",
      "--bg-accent": "#e9e9e6",
      "--text": "#111111",
      "--muted": "#3f3f3f",
      "--primary": "#111111",
      "--secondary": "#6b7280",
      "--card": "#fafaf9",
      "--border": "#d4d4d8",
      "--shadow": "0 10px 24px rgba(17, 17, 17, 0.18)",
      "--pattern": "linear-gradient(135deg, rgba(0, 0, 0, 0.04), transparent 55%)"
    }
  },
  citrus: {
    label: "Citrus",
    vars: {
      "--bg": "#fff6ed",
      "--bg-accent": "#ffe6d1",
      "--text": "#1c1917",
      "--muted": "#57534e",
      "--primary": "#ea580c",
      "--secondary": "#0f766e",
      "--card": "#ffffff",
      "--border": "#fed7aa",
      "--shadow": "0 14px 32px rgba(234, 88, 12, 0.18)",
      "--pattern": "radial-gradient(circle at 10% 10%, rgba(234, 88, 12, 0.2), transparent 35%), radial-gradient(circle at 90% 20%, rgba(15, 118, 110, 0.18), transparent 45%)"
    }
  },
  ink: {
    label: "Ink",
    vars: {
      "--bg": "#f5f3ff",
      "--bg-accent": "#ede9fe",
      "--text": "#111827",
      "--muted": "#4c1d95",
      "--primary": "#4c1d95",
      "--secondary": "#7c3aed",
      "--card": "#ffffff",
      "--border": "#ddd6fe",
      "--shadow": "0 18px 32px rgba(76, 29, 149, 0.18)",
      "--pattern": "linear-gradient(120deg, rgba(76, 29, 149, 0.14), transparent 60%)"
    }
  },
  sand: {
    label: "Sand",
    vars: {
      "--bg": "#fefce8",
      "--bg-accent": "#fef3c7",
      "--text": "#1c1917",
      "--muted": "#7c6f64",
      "--primary": "#b45309",
      "--secondary": "#15803d",
      "--card": "#ffffff",
      "--border": "#fde68a",
      "--shadow": "0 12px 28px rgba(180, 83, 9, 0.18)",
      "--pattern": "radial-gradient(circle at 75% 25%, rgba(180, 83, 9, 0.16), transparent 40%)"
    }
  },
  studio: {
    label: "Studio",
    vars: {
      "--bg": "#f0f9ff",
      "--bg-accent": "#e0f2fe",
      "--text": "#0f172a",
      "--muted": "#475569",
      "--primary": "#0f172a",
      "--secondary": "#38bdf8",
      "--card": "#ffffff",
      "--border": "#bae6fd",
      "--shadow": "0 16px 30px rgba(15, 23, 42, 0.2)",
      "--pattern": "linear-gradient(160deg, rgba(56, 189, 248, 0.18), transparent 60%)"
    }
  },
  lake: {
    label: "Lake",
    vars: {
      "--bg": "#ecfeff",
      "--bg-accent": "#cffafe",
      "--text": "#0f172a",
      "--muted": "#0e7490",
      "--primary": "#0891b2",
      "--secondary": "#1e3a8a",
      "--card": "#ffffff",
      "--border": "#a5f3fc",
      "--shadow": "0 18px 36px rgba(8, 145, 178, 0.2)",
      "--pattern": "radial-gradient(circle at 20% 80%, rgba(8, 145, 178, 0.2), transparent 45%)"
    }
  }
};
