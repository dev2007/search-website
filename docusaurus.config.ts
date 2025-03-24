import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "JointSearch",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.mortnon.tech",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mortise-and-tenon", // Usually your GitHub org/user name.
  projectName: "mortnon", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  scripts: [
    {
      src: "https://hm.baidu.com/hm.js?569b27de16e17c6f999ff10e6e6fe334",
      async: true,
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadata: [
      {
        name: "keywords",
        content:
          "mortnon,卯榫,elastic,elasticsearch,kibana,data,数据探索,分析,search,cluster,index,elasticsearch 中文,elastic 中文,visualizing,analyzing,exploring",
      },
    ],
    navbar: {
      title: "JointSearch",
      logo: {
        alt: "jointsearch Logo",
        src: "img/icon.png",
      },
      hideOnScroll: true,
      items: [
        {
          position: "right",
          label: "Home",
          to: "/",
        },
        {
          position: "right",
          label: "GitHub",
          to: "https://github.com/mortise-and-tenon/JointSearch",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
