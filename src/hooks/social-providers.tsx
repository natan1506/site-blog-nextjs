import { Linkedin, Facebook, Slack } from "lucide-react";

export type ShareConfig = {
  url: string;
  title?: string;
  text?: string;
};

export type SocialProvider = "linkedin" | "facebook" | "slack";

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: "LinkedIn",
    icon: <Linkedin className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        config.url
      )}`,
  },
  facebook: {
    name: "Facebook",
    icon: <Facebook className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/share.php?u=${encodeURIComponent(config.url)}`,
  },
  slack: {
    name: "Slack",
    icon: <Slack className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.slack.com/share?url=${encodeURIComponent(
        config.url
      )}&text=${encodeURIComponent(config.title || "")}`,
  },
};
