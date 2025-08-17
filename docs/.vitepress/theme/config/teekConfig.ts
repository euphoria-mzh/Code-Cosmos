import type { TeekConfig } from "@teek/config";

// 文档配置
export const teekDocConfig: TeekConfig = {
  themeEnhance: {
    layoutSwitch: {
      defaultMode: "bothWidthAdjustable",
    },
  },
};

// 博客基础配置
const teekBlogCommonConfig: TeekConfig = {
  teekHome: true,
  vpHome: false,
  wallpaper: {
    enabled: true,
  },
  footerInfo: {
    customHtml: `<span id="runtime"></span>`, // 需要搭配 .vitepress/theme/helper/useRuntime.ts 使用
  },
  docAnalysis: {
    enabled: true,
    createTime: "2025-03-23",
    wordCount: true,
    readingTime: true,
    // statistics: {
    //   provider: "busuanzi",
    // },
  },
  // overrideInfo: [
  //   {
  //     key: "lastActiveTime",
  //     label: "活跃时间",
  //     value: (_, currentValue) =>
  //       (currentValue + "").replace("前", ""),
  //     show: true,
  //   },
  // ],
  social: [
    {
      icon: "mdi:github",
      name: "GitHub",
      link: "https://github.com/euphoria-mzh",
    },
    {
      icon: "simple-icons:gitee",
      name: "Gitee",
      link: "https://gitee.com/euphoria-mzh",
    },
  ],
};

// 博客默认配置
export const teekBlogConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  banner: {
    name: "🎉 code cosmos",
    description:
      "当硅基生命遇见碳基文明，宇宙开始自我编程",
    bgStyle: "partImg",
  },
};

// 博客小图配置
export const teekBlogParkConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  banner: {
    name: "🎉 code cosmos",
    bgStyle: "partImg",
    imgSrc: [
      "/blog/bg1.webp",
      "/blog/bg2.webp",
      "/blog/bg3.webp",
    ],
    description: [
      "欢迎来到 code cosmos",
      "当硅基生命遇见碳基文明，宇宙开始自我编程",
      "温故知新",
    ],
    descStyle: "switch",
  },
};

// 博客大图配置
export const teekBlogFullConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  post: {
    coverImgMode: "full",
  },
  banner: {
    name: "🎉 code cosmos",
    bgStyle: "fullImg",
    imgSrc: [
      "/blog/bg1.webp",
      "/blog/bg2.webp",
      "/blog/bg3.webp",
    ],
    description: [
      "欢迎来到 code cosmos",
      "当硅基生命遇见碳基文明，宇宙开始自我编程",
      "温故知新",
    ],
    descStyle: "types",
  },
  comment: {
    provider: "giscus",
    options: {
      repo: "Kele-Bingtang/vitepress-theme-teek",
      repoId: "R_kgDONpVfBA",
      category: "Announcements",
      categoryId: "DIC_kwDONpVfBM4Cm3v9",
    },
  },
};

// 博客全图配置
export const teekBlogBodyConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  pageStyle: "segment-nav",
  bodyBgImg: {
    imgSrc: [
      "/blog/bg1.webp",
      "/blog/bg2.webp",
      "/blog/bg3.webp",
    ],
  },
  themeEnhance: {
    layoutSwitch: {
      defaultMode: "original",
    },
  },
};

// 博客卡片配置
export const teekBlogCardConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  post: {
    postStyle: "card",
  },
  homeCardListPosition: "left",
  banner: {
    name: "🎉 code cosmos",
    bgStyle: "fullImg",
    imgSrc: [
      "/blog/bg1.webp",
      "/blog/bg2.webp",
      "/blog/bg3.webp",
    ],
    description: [
      "欢迎来到 code cosmos",
      "当硅基生命遇见碳基文明，宇宙开始自我编程",
      "温故知新",
    ],
    descStyle: "types",
  },
};
