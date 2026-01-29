import rawConfig from "../../site.config.json";
import { themes, type ThemeId } from "@/styles/themes";

export type SiteConfig = {
  site: {
    title: string;
    description: string;
    author: string;
    email: string;
    linkedin: string;
    theme: ThemeId;
    url: string;
    portfolioPath: string;
  };
};

export const siteConfig = rawConfig as SiteConfig;

export const activeTheme = themes[siteConfig.site.theme] ?? themes.aurora;
