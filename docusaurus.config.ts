import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "TBB Docs",
  tagline: "Standards and internal processes",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://tbb-docs.netlify.app/",
  baseUrl: "/",

  organizationName: "tbb",
  projectName: "tbb-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    localeConfigs: {
      en: { label: "English" },
      pt: { label: "Português" },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
          editUrl: "https://github.com/nilbertbb/tbb-docs",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/tbb-social-card.jpg",
    navbar: {
      title: "TBB Docs",
      logo: {
        alt: "TBB Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tbbSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/nilbertbb/tbb-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Documentation",
              to: "/docs/development/pr",
            },
            {
              label: "GitHub",
              href: "https://github.com/nilbertbb/tbb-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TBB. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
