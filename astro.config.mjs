import { defineConfig } from "astro/config";
import remarkDirective from "remark-directive";
import { remarkEmbeds } from "./src/lib/remark-embeds.js";

export default defineConfig({
  site: "https://richardlin378.github.io",
  trailingSlash: "always",
  integrations: [],
  markdown: {
    remarkPlugins: [remarkDirective, remarkEmbeds],
    shikiConfig: {
      theme: "github-dark"
    }
  }
});
