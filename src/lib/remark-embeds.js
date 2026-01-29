import { visit } from "unist-util-visit";

const YOUTUBE_DOMAINS = ["youtu.be/", "youtube.com/", "www.youtube.com/"];

const toText = (node) => {
  if (!node) return "";
  if (Array.isArray(node.children)) {
    return node.children.map((child) => child.value || "").join("");
  }
  return "";
};

const parseYoutubeId = (value) => {
  if (!value) return "";
  const trimmed = value.trim();
  if (YOUTUBE_DOMAINS.some((d) => trimmed.includes(d))) {
    try {
      const url = new URL(trimmed);
      if (url.hostname.includes("youtu.be")) {
        return url.pathname.replace("/", "");
      }
      if (url.searchParams.get("v")) {
        return url.searchParams.get("v");
      }
    } catch {
      return trimmed;
    }
  }
  return trimmed;
};

const toSpotifyEmbed = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (trimmed.includes("open.spotify.com")) {
    const parts = trimmed.split("open.spotify.com/");
    return `https://open.spotify.com/embed/${parts[1]}`;
  }
  if (trimmed.startsWith("spotify:")) {
    return `https://open.spotify.com/embed/${trimmed.replace("spotify:", "")}`;
  }
  return trimmed;
};

export const remarkEmbeds = () => {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (!parent || typeof index !== "number") return;
      if (node.type !== "leafDirective" && node.type !== "textDirective") return;

      const name = node.name;
      if (name !== "youtube" && name !== "spotify") return;

      const rawValue = node.attributes?.id || node.attributes?.url || toText(node);
      if (!rawValue) return;

      if (name === "youtube") {
        const id = parseYoutubeId(rawValue).replace(/[^a-zA-Z0-9_-]/g, "");
        if (!id) return;
        parent.children[index] = {
          type: "html",
          value: `<div class="embed embed-youtube"><iframe src="https://www.youtube.com/embed/${id}" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
        };
      }

      if (name === "spotify") {
        const embedUrl = toSpotifyEmbed(rawValue);
        if (!embedUrl) return;
        parent.children[index] = {
          type: "html",
          value: `<div class="embed embed-spotify"><iframe src="${embedUrl}" title="Spotify embed" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>`
        };
      }
    });
  };
};
