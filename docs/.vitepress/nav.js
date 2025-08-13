export const nav = [
  { text: '🏠主页', link: '/' },
  { text: '🧭导航', link: '/nav/nav.md', activeMatch: '^/nav' },
  {
    text: '🗂文档',
    items: [
      {
        text: '📂 终端命令',
        items: [
          { text: '🔖 Linux', link: '/Document/终端命令行/Linux.md' },
          { text: '🔖 Git', link: '/Document/终端命令行/git.md' },
        ]
      },
      {
        text: '📂 中级注安讲义',
        items: [
          { text: '🔖 法律法规', link: '/Document/中级注安讲义/01-法规讲义.md' },
        ]
      },
    ]
  },
  {
    text: '🧰常用工具',
    items: [
      {
        text: '🧫 实用软件',
        items: [
          { text: "Windows", link: "/Tools/实用软件/windows.md" },
          { text: "Mac", link: "/Tools/实用软件/mac.md" },
        ]
      },
      {
        text: '📌 实用插件',
        items: [
          { text: "Chrome插件", link: "/Tools/实用插件/Chrome.md" },
          { text: "Vscode插件", link: "/Tools/实用插件/VScode.md" },
        ]
      },
      {
        text: '🧬 实用项目包',
        items: [
          { text: "npm包", link: "/Tools/实用项目包/index.md" },
        ]
      },
    ]
  },
  {
    text: '🎟 教程',
    items: [
      { text: 'Win11美化', link: '/Tutorial/README.md' },
      { text: 'Win11右键菜单', link: '/Tutorial/win11右键菜单.md' },
      { text: '终端美化', link: '/Tutorial/终端美化.md' },
      { text: '数据库安装', link: '/Tutorial/数据库.md' },
      { text: '轻量云服务器配置', link: '/Tutorial/云服务器.md' },
      { text: '自动化部署', link: '/Tutorial/自动化部署.md' },
      { text: 'Markdown语法', link: '/Tutorial/markdown语法.md' },
    ]
  },
]