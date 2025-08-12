import type { NavLink } from "./components/type";

type NavData = {
  title: string;
  items: NavLink[];
};

export const NAV_DATA: NavData[] = [
  // AI 导航
  {
    title: "AI 导航",
    items: [
      {
        icon: "https://openai.com/favicon.svg",
        title: "ChatGPT（最强）",
        link: "https://chat.openai.com/chat",
      },
      {
        icon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png",
        title: "豆包（免费）",
        link: "https://www.doubao.com/chat/",
      },
      {
        icon: "https://www.deepseek.com/favicon.ico",
        title: "deepseek（免费）",
        link: "https://www.deepseek.com/",
      },
      {
        icon: "https://cdn.aidutu.cn/res/head/ai.png",
        title: "AiDuTu（免费）",
        link: "https://chat.aidutu.cn/",
      },
      {
        icon: "https://www.notion.so/images/logo-ios.png",
        title: "Notion AI（笔记）",
        link: "https://www.notion.so",
      },
      {
        icon: "https://www.midjourney.com/public/apple-touch-icon.png",
        title: "Midjourney（绘画）",
        link: "https://www.midjourney.com",
      },
      {
        icon: "https://edit-static-1307270943.cos.ap-beijing.myqcloud.com/logo.ico",
        title: "Vega AI(ai绘画)",
        link: "https://rightbrain.art/",
      },
      {
        icon: "https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png",
        title: "Beautiful.ai（PPT）",
        link: "https://www.beautiful.ai",
      },
    ],
  },
  // 常用网址
  {
    title: "常用网址",
    items: [
      {
        icon: "https://github.githubassets.com/favicons/favicon.png",
        title: "Github",
        desc: "顶级存储库",
        link: "https://github.com/",
      },
      {
        icon: "https://cloud.tencent.com/favicon.ico?t=201902181234",
        title: "腾讯云",
        desc: "性能强大、安全、稳定的云产品",
        link: "https://cloud.tencent.com/",
      },
      {
        icon: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
        title: "微信开放平台",
        desc: "微信开发者平台",
        link: "https://open.weixin.qq.com/",
      },
      {
        icon: "https://wx.gtimg.com/core/favicon.ico",
        title: "微信官方文档",
        desc: "微信支付Api文档",
        link: "https://developers.weixin.qq.com/doc/",
      },
    ],
  },
  // 常用工具
  {
    title: "常用工具",
    items: [
      {
        icon: "http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_bf2d601636884a37bb1d4bce32160254.png",
        title: "程序员盒子",
        desc: "程序员一站式编程导航",
        link: "https://www.coderutil.com/",
      },
      {
        icon: "http://www.cxy521.com/static/img/favicon.ico",
        title: "程序员导航",
        desc: "程序员一站式编程导航",
        link: "http://www.cxy521.com/",
      },
      {
        icon: "https://devtool.tech/logo.svg",
        title: "开发者武器库",
        desc: "开发者武器库，做开发者最专业最好用的专业工具箱",
        link: "https://devtool.tech",
      },
      {
        icon: "https://static.jyshare.com/images/c-runoob-logo.ico",
        title: "菜鸟工具",
        desc: "菜鸟工具 不止于工具",
        link: "https://c.runoob.com/",
      },
      {
        icon: "https://www.sjsdh.cn/wp-content/uploads/2024/11/1731835686-%E6%90%9C%E5%A5%87%E5%AF%BC%E8%88%AA%E5%9B%BE%E6%A0%87.jpg",
        title: "搜奇导航",
        desc: "专注于分享简单实用的网站导航",
        link: "https://www.sjsdh.cn/",
      },
      {
        icon: "http://tools.jb51.net/favicon.ico",
        title: "脚本之家在线工具",
        desc: "开发人员的工具箱",
        link: "http://tools.jb51.net/#",
      },
      {
        icon: "https://tool.lu/favicon.ico",
        title: "在线工具",
        desc: "开发人员的工具箱",
        link: "https://tool.lu",
      },
      {
        icon: "https://www.apple.com.cn/favicon.ico",
        title: "Mac软件库",
        desc: "种类很多的Mac破解软件合集",
        link: "https://www.macyy.cn/",
      },
      {
        icon: "https://ai-bot.cn/wp-content/uploads/2023/03/ai-bot-square-logo.png",
        title: "Ai工具集",
        desc: "一个优质全面的AI工具集合导航",
        link: "https://ai-bot.cn/",
      },
      {
        icon: "https://www.cmdpe.com/zb_users/theme/HTML5CSS3/style/images/favicon.ico",
        title: "cmdpe",
        desc: "windows系统及专业软件及MacOS系统镜像",
        link: "https://www.cmdpe.com/",
      },
      {
        icon: "https://www.kkmkj.net/zb_users/theme/HTML5CSS3/style/images/favicon.ico",
        title: "KK梦空间",
        desc: "windows系统及专业软件以及实用软件",
        link: "https://www.kkmkj.net/",
      },
      {
        icon: "https://www.qijishow.com/img/ico.ico",
        title: "奇迹秀",
        desc: "因设计而美丽 包含工具箱",
        link: "https://www.qijishow.com/",
      },
      {
        icon: "https://caniuse.com/img/favicon-128.png",
        title: "Can I use",
        desc: "前端 API 兼容性查询",
        link: "https://caniuse.com",
      },
      {
        icon: "https://static.json.cn/r/img/favicon/favicon.ico",
        title: "Json 中文网",
        desc: "JSON 在线解析及格式化验证",
        link: "https://www.json.cn",
      },
      {
        icon: "https://hellowindows.cn/logo-s.png",
        title: "HelloWindows",
        desc: "精校 完整 极致 Windows系统下载仓储站",
        link: "https://hellowindows.cn/",
      },
      {
        icon: "https://icon.meiye.art/meiye/v1.2.4/favicon.ico",
        title: "美叶",
        desc: "ui集",
        link: "https://www.meiye.art/",
      },
      {
        icon: "https://shields.io/img/favicon.ico",
        title: "静态徽标",
        desc: "简洁、一致且清晰的徽章",
        link: "https://shields.io/",
      },
      {
        icon: "https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico",
        title: "代码森林",
        desc: "构建、测试和发现前端代码的最佳场所",
        link: "https://codepen.io/",
      },
      {
        icon: "https://static.mastergo.com/static/favicon/favicon-32x32-new.png",
        title: "MasterGo",
        desc: "产品设计工具",
        link: "https://mastergo.com/files/home",
      },
    ],
  },
  // 开发工具
  {
    title: "开发工具",
    items: [
      {
        icon: "https://code.visualstudio.com/favicon.ico",
        title: "VS Code",
        desc: "最受欢迎的代码编辑器",
        link: "https://code.visualstudio.com/",
      },
      {
        icon: "https://img0.baidu.com/it/u=3215871746,2450763160&fm=253&fmt=auto&app=138&f=JPEG",
        title: "Intelli IDEA",
        desc: "Java最好用的编程工具",
        link: "https://www.jetbrains.com/idea/",
      },
      {
        icon: "https://www.sublimetext.com/favicon.ico",
        title: "Sublime Text",
        desc: "超轻量且强大的跨平台文本编辑器",
        link: "https://www.sublimetext.com/",
      },
      {
        icon: "https://www.eclipse.org/eclipse.org-common/themes/solstice/public/images/favicon.ico",
        title: "Eclipse",
        desc: "老牌Java编辑器 用户量很广",
        link: "https://www.eclipse.org/downloads/",
      },
      {
        icon: "http://www.cxy521.com/static/img/index/devtool/webstorm.png",
        title: "WebStorm",
        desc: "web前端开发神器",
        link: "https://www.jetbrains.com/webstorm/",
      },
      {
        icon: "http://www.cxy521.com/static/img/index/devtool/pycharm.png",
        title: "Pycharm",
        desc: "专业的Python IDE 功能很强",
        link: "https://www.jetbrains.com/pycharm/",
      },
      {
        icon: "https://www.gstatic.com/devrel-devsite/prod/vbeaa29e876158dfb06aa429312bd7db69a5340b565a9d05deb2c27ad13316f00/android/images/favicon.svg",
        title: "android studio",
        desc: "谷歌推出的Android集成开发工具",
        link: "https://developer.android.com/studio",
      },
      {
        icon: "https://download1.dcloud.net.cn/uploads/images/hbuilderx/icon/hbuilderx_icon@2x.png",
        title: "HBuilderX",
        desc: "极客开发工具 uni",
        link: "https://www.dcloud.io/hbuilderx.html",
      },
      {
        icon: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
        title: "微信开发者工具",
        desc: "集成了公众号网页调试和小程序调试两种开发模式",
        link: "https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",
      },
      {
        icon: "https://developer.apple.com/favicon.ico",
        title: "xcode",
        desc: "开发 mac 和 ios 应用程序所需的一切工具",
        link: "https://developer.apple.com/xcode/",
      },
      {
        icon: "https://www.google.cn/chrome/static/images/favicons/favicon-32x32.png",
        title: "Chrome",
        desc: "开发者最爱的浏览器",
        link: "https://www.google.cn/chrome/",
      },
      {
        icon: "https://www.snipaste.com/img/logo.svg",
        title: "Snipaste",
        desc: "最好用的截图工具",
        link: "https://www.snipaste.com/",
      },
      {
        icon: "https://www.xp.cn/favicon.ico",
        title: "小皮面板（phpstudy）",
        desc: "让天下没有难配的服务器环境，解放运维",
        link: "https://www.xp.cn/",
      },
      {
        icon: "https://github.githubassets.com/favicon.ico",
        title: "Atom",
        desc: "GitHub开源的代码编辑器，支持多种编程语言和插件",
        link: "https://atom.io/",
      },
      {
        icon: "https://www.vim.org/images/vim_shortcut.ico",
        title: "Vim",
        desc: "高度可定制的文本编辑器，支持多种编程语言和插件",
        link: "https://www.vim.org/",
      },
      {
        icon: "https://www.jetbrains.com/icon.svg?r=1234",
        title: "JetBrains PhpStorm",
        desc: "PHP 开发的最佳 IDE，支持多种编程语言和框架",
        link: "https://www.jetbrains.com/phpstorm/",
      },
      {
        icon: "https://img1.baidu.com/it/u=3923710893,4130726790&fm=253&fmt=auto&app=138&f=JPEG",
        title: "JetBrains RubyMine",
        desc: "Ruby 开发的最佳 IDE，支持多种编程语言和框架",
        link: "https://www.jetbrains.com/ruby/",
      },
      {
        icon: "https://img0.baidu.com/it/u=194218021,3236649917&fm=253&fmt=auto&app=138&f=GIF",
        title: "JetBrains CLion",
        desc: "C/C++ 开发的最佳 IDE，支持多种编程语言和框架",
        link: "https://www.jetbrains.com/clion/",
      },
      {
        icon: "http://www.cxy521.com/static/img/index/devtool/navicat.png",
        title: "Navicat",
        desc: "数据库常用客户端工具",
        link: "https://www.navicat.com.cn/download/navicat-premium",
      },
      {
        icon: "http://www.cxy521.com/static/img/index/devtool/datagrip.png",
        title: "JetBrains DataGrip",
        desc: "数据库管理工具，支持多种关系型和非关系型数据库",
        link: "https://www.jetbrains.com/datagrip/",
      },
      {
        icon: "http://www.cxy521.com/static/img/index/devtool/chiner.png",
        title: "PDManer",
        desc: "一款多操作系统开源免费的桌面版关系数据库模型建模工具",
        link: "https://gitee.com/robergroup/pdmaner",
      },
      {
        icon: "https://dbeaver.io/wp-content/uploads/2016/07/beaver_icon_32x32.png",
        title: "DBeaver",
        desc: "一款免费开源的通用数据库工具",
        link: "https://dbeaver.io/",
      },
      {
        icon: "https://redis.io/favicon.ico",
        title: "Redis Desktop Manager",
        desc: "Redis 客户端推荐工具",
        link: "https://resp.app/",
      },
      {
        icon: "http://www.cxy521.com/static/img/index/devtool/aredis.png",
        title: "Another Redis Desktop Manager",
        desc: "一款稳定全新的Redis客户端工具",
        link: "https://github.com/qishibo/AnotherRedisDesktopManager",
      },
      {
        icon: "https://studio3t.com/favicon.ico?v=3eBmpN7O3k",
        title: "studio3t",
        desc: "MongoDB 最好用的客户端工具",
        link: "https://studio3t.com/download/",
      },
      {
        icon: "https://www.jetbrains.com/icon.svg?r=1234",
        title: "JetBrains Rider",
        desc: "跨平台的 .NET IDE，支持多种编程语言和框架",
        link: "https://www.jetbrains.com/rider/",
      },
      {
        icon: "https://img1.baidu.com/it/u=4015896872,315811874&fm=253&fmt=auto&app=120&f=PNG",
        title: "JetBrains GoLand",
        desc: "Go 开发的最佳 IDE，支持多种编程语言和框架",
        link: "https://www.jetbrains.com/go/",
      },
      {
        icon: "https://pic60.mac89.com/mac69/ico/202208/19145930_a1976e1252.png",
        title: "JetBrains AppCode",
        desc: "iOS/macOS 开发的最佳 IDE，支持多种编程语言和框架",
        link: "https://www.jetbrains.com/objc/",
      },
      {
        icon: "https://www.adobe.com/content/dam/cc/icons/xd.svg",
        title: "Adobe XD",
        desc: "设计和原型制作工具，适用于 Web 和移动应用程序",
        link: "https://www.adobe.com/products/xd.html",
      },
      {
        icon: "https://www.sketch.com/favicon.ico",
        title: "Sketch",
        desc: "专为 UI/UX 设计师打造的矢量绘图工具",
        link: "https://www.sketch.com/",
      },
      {
        icon: "https://www.sublimemerge.com/favicon.ico",
        title: "Sublime Merge",
        desc: "轻量级的 Git 客户端，提供强大的分支可视化和代码比较工具",
        link: "https://www.sublimemerge.com/",
      },
      {
        icon: "https://www.visual-paradigm.com/favicon.ico",
        title: "Visual Paradigm",
        desc: "UML 建模和设计工具，支持多种编程语言和项目管理",
        link: "https://www.visual-paradigm.com/",
      },
      {
        icon: "https://postcat.com/zh/assets/icons/iconLogo.png",
        title: "Postcat",
        desc: "开源、可拓展的API管理工具",
        link: "https://github.com/Postcatlab/postcat",
      },
      {
        icon: "https://cdn.apifox.cn/logo/apifox-logo-256.png",
        title: "Apifox",
        desc: "Apifox = Postman + Swagger + Mock + JMeter",
        link: "https://apifox.com/",
      },
      {
        icon: "https://www.postman.com/_ar-assets/images/favicon-1-32.png",
        title: "Postman",
        desc: "API 开发和测试工具，支持多种 HTTP 请求和断言",
        link: "https://www.postman.com/",
      },
      {
        icon: "https://img.cdn.apipost.cn/website7/favicon.ico",
        title: "ApiPost",
        desc: "支持团队协作、可直接生成文档的API调试、管理工具",
        link: "https://www.apipost.cn/download.html",
      },
      {
        icon: "https://www.telerik.com/favicon.ico?v=rebv1",
        title: "Fiddle",
        desc: "最常见的网络抓包工具",
        link: "https://www.telerik.com/download/fiddler",
      },
      {
        icon: "https://www.vandyke.com/favicon.ico",
        title: "secureCRT&FX",
        desc: "超好用的FTP SSH连接工具",
        link: "https://www.vandyke.com/download/index.html",
      },
      {
        icon: "http://www.cxy521.com/static/img/index/devtool/finalxshell.png",
        title: "FinalShell",
        desc: "一体化的服务器，网络管理软件，不仅是ssh客户端 还是功能强大的开发运维工具",
        link: "https://www.hostbuf.com/t/988.html",
      },
      {
        icon: "	http://www.cxy521.com/static/img/index/devtool/51LA.png",
        title: "51页面埋点统计",
        desc: "免费易集成的页面埋点（访问统计）工具",
        link: "https://v6.51.la/",
      },
      {
        icon: "http://www.cxy521.com/static/img/index/devtool/editplus.png",
        title: "EditPlus",
        desc: "比较常用的文本编辑器",
        link: "https://www.editplus.com/download.html",
      },
      {
        icon: "https://images.sftcdn.net/images/t_favicon-v2/p/311d9b92-96d2-11e6-b5e8-00163ed833e7/2186182379/notepad-plus-11194__notepad-plus-plus-icon.png",
        title: "NodePad++",
        desc: "好用的文本编辑器",
        link: "https://notepad-plus.en.softonic.com/",
      },
    ],
  },
  // Vue 生态
  {
    title: "Vue 生态",
    items: [
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue 3",
        desc: "渐进式 JavaScript 框架",
        link: "https://cn.vuejs.org",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue 2",
        desc: "渐进式 JavaScript 框架",
        link: "https://v2.cn.vuejs.org",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue Router",
        desc: "Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由",
        link: "https://router.vuejs.org/zh",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vuex",
        desc: "Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库",
        link: "https://vuex.vuejs.org/zh/",
      },
      {
        icon: "https://pinia.vuejs.org/logo.svg",
        title: "Pinia",
        desc: "符合直觉的 Vue.js 状态管理库",
        link: "https://pinia.vuejs.org/zh",
      },
      {
        icon: "https://nuxt.com/icon.png",
        title: "Nuxt.js",
        desc: "一个基于 Vue.js 的通用应用框架",
        link: "https://nuxt.com",
      },
      {
        icon: "https://vueuse.org/favicon.svg",
        title: "VueUse",
        desc: "Vue Composition API 的常用工具集",
        link: "https://vueuse.org",
      },
      {
        icon: "https://element-plus.org/images/element-plus-logo-small.svg",
        title: "Element",
        desc: "Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库",
        link: "https://element.eleme.io/#/zh-CN",
      },
      {
        icon: "https://element-plus.org/images/element-plus-logo-small.svg",
        title: "Element Plus",
        desc: "基于 Vue 3，面向设计师和开发者的组件库",
        link: "https://element-plus.org",
      },
      {
        icon: "https://www.antdv.com/assets/logo.1ef800a8.svg",
        title: "Ant Design Vue",
        desc: "Ant Design 的 Vue 实现，开发和服务于企业级后台产品",
        link: "https://antdv.com",
      },
      {
        icon: "https://static.tdesign.tencent.com/favicon.ico",
        title: "Tdesign",
        desc: "TDesign企业级设计体系",
        link: "https://tdesign.tencent.com/",
      },
      {
        icon: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
        title: "Vant",
        desc: "轻量、可定制的移动端 Vue 组件库",
        link: "https://vant-ui.github.io/vant",
      },
      {
        icon: "https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico",
        title: "Cube UI",
        desc: "基于 Vue.js 实现的精致移动端组件库",
        link: "https://didi.github.io/cube-ui",
      },
      {
        icon: "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png",
        title: "NutUI",
        desc: "京东风格的轻量级移动端组件库",
        link: "https://nutui.jd.com",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Geeker-Admin",
        desc: "简单易用的中后台模版 基于 Vue3.2 + Vite4 + TS + Pinia + Element-Plus",
        link: "https://docs.spicyboy.cn/",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue-Element-Admin",
        desc: "vue-element-admin是用于管理界面的生产就绪前端解决方案。",
        link: "https://github.com/szqlovepk/vue-admin",
      },
      {
        icon: "https://doc.vue-antd-admin.pages.dev/favicon.ico",
        title: "vue-antd-admin",
        desc: "开箱即用的中台前端/设计解决方案",
        link: "https://doc.vue-antd-admin.pages.dev/",
      },
      {
        icon: "https://file.iviewui.com/view-design-logo.png",
        title: "View Design",
        desc: "基于 Vue.js 3 的企业级 UI 组件库和中后台系统解决方案，",
        link: "https://www.iviewui.com/",
      },
      {
        icon: "https://cn-vuejs-challenges.netlify.app/favicon.ico",
        title: "Vue.js 挑战",
        desc: "一个 Vue.js 在线挑战平台",
        link: "https://cn-vuejs-challenges.netlify.app/",
      },
    ],
  },
  // React 生态
  {
    title: "React 生态",
    items: [
      {
        icon: "https://zh-hans.reactjs.org/favicon.ico",
        title: "React",
        desc: "用于构建用户界面的 JavaScript 库",
        link: "https://zh-hans.reactjs.org",
      },
      {
        icon: "https://reactrouter.com/favicon-light.png",
        title: "React Router",
        desc: "React 的声明式路由",
        link: "https://reactrouter.com",
      },
      {
        icon: "https://nextjs.org/favicon.ico?favicon.e9a7e71a.ico",
        title: "Next.js",
        desc: "一个用于 Web 的 React 框架",
        link: "https://nextjs.org",
      },
      {
        icon: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
        title: "UmiJS",
        desc: "插件化的企业级前端应用框架",
        link: "https://umijs.org",
      },
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
        title: "Ant Design",
        desc: "一套企业级 UI 设计语言和 React 组件库",
        link: "https://ant.design",
      },
      {
        icon: "https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg",
        title: "Ant Design Mobile",
        desc: "构建移动 WEB 应用程序的 React 组件库",
        link: "https://mobile.ant.design",
      },
      {
        icon: "https://docs.pmnd.rs/apple-touch-icon.png",
        title: "Zustand",
        desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
        link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
      },
      {
        icon: "https://valtio.pmnd.rs/favicon.ico",
        title: "Valtio",
        desc: "makes proxy-state simple for React and Vanilla",
        link: "https://valtio.pmnd.rs",
      },
      {
        icon: "https://jotai.org/favicon.svg",
        title: "Jotai",
        desc: "primitive and flexible state management for React",
        link: "https://jotai.org",
      },
      {
        icon: "https://cn.redux.js.org/img/redux.svg",
        title: "Redux",
        desc: "JavaScript 应用的状态容器，提供可预测的状态管理",
        link: "https://cn.redux.js.org",
      },
      {
        icon: "https://zh.mobx.js.org/assets/mobx.png",
        title: "MobX",
        desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
        link: "https://zh.mobx.js.org",
      },
      {
        icon: "https://ahooks.js.org/simple-logo.svg",
        title: "ahooks",
        desc: "一套高质量可靠的 React Hooks 库",
        link: "https://ahooks.js.org/zh-CN",
      },
    ],
  },
  // JavaScript 框架类库
  {
    title: "JavaScript 框架类库",
    items: [
      {
        icon: "https://svelte.dev/svelte-logo-horizontal.svg",
        title: "Svelte",
        desc: "将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码",
        link: "https://svelte.dev",
      },
      {
        icon: "https://simpleicons.org/icons/jquery.svg",
        title: "jQuery",
        desc: "jQuery 是一个快速、小型且功能丰富的 JavaScript 库",
        link: "https://jquery.com/",
      },
      {
        icon: "https://simpleicons.org/icons/jquery.svg",
        title: "jQuery API 中文文档",
        desc: "一个兼容多浏览器的 JavaScript 框架",
        link: "https://jquery.cuishifeng.cn",
      },
      {
        icon: "https://www.jq22.com/favicon.ico",
        title: "jQuery插件库",
        desc: "本站致力于收集jQuery插件和提供各种jQuery特效的详细使用方法",
        link: "https://www.jq22.com/",
      },
      {
        icon: "http://www.htmleaf.com/favicon.ico",
        title: "jQuery之家",
        desc: "自由分享jQuery、html5和css3的插件库",
        link: "http://www.htmleaf.com/",
      },
      {
        icon: "https://vincentgarreau.com/assets/img/favicon.ico",
        title: "particles.js",
        desc: "用于创建粒子的轻量级 JavaScript 库",
        link: "https://vincentgarreau.com/particles.js/",
      },
      {
        icon: "https://v5.bootcss.com/docs/5.3/assets/img/favicons/favicon.ico",
        title: "BootstrapV5",
        desc: "强大、可扩展、功能丰富的前端开发工具包。",
        link: "https://v5.bootcss.com/",
      },
      {
        icon: "https://www.swiper.com.cn/favicon.ico",
        title: "Swiper8",
        desc: "开源，免费，强大的触摸滑动插件",
        link: "https://www.swiper.com.cn/",
      },
    ],
  },
  // CSS 相关
  {
    title: "CSS 相关",
    items: [
      {
        icon: "https://postcss.org/assets/favicon-DbGqNhKa.ico",
        title: "PostCSS",
        desc: "一个用 JavaScript 转换 CSS 的工具",
        link: "https://postcss.org",
      },
      {
        icon: "https://sass-lang.com/favicon.ico",
        title: "Sass",
        desc: "一个成熟，稳定，功能强大的专业级 CSS 扩展语言",
        link: "https://sass-lang.com",
      },
      {
        icon: "https://tailwindcss.com/favicons/favicon.ico?v=4",
        title: "TailwindCSS 中文网",
        desc: "一个功能类优先的 CSS 框架",
        link: "https://tailwindcss.com/",
      },
      {
        icon: "https://poke-holo.simey.me/favicon.png",
        title: "精灵宝可梦卡片V2",
        desc: "通过@simeydotme | 西蒙戈尔纳的集合高级CSS要创建的样式 逼真的效果对于口袋妖怪卡片的面孔。",
        link: "https://poke-holo.simey.me/",
      },
    ],
  },
  // 小程序相关
  {
    title: "小程序相关",
    items: [
      {
        icon: "https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png",
        title: "微信小程序文档",
        desc: "微信小程序官方开发者文档",
        link: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
      },
      {
        icon: "https://tls.jd.com/o2-website/favicon.ico",
        title: "Taro",
        desc: "多端统一开发解决方案",
        link: "https://taro.aotu.io/",
      },
      {
        icon: "https://web-assets.dcloud.net.cn/unidoc/zh/icon.png",
        title: "uni-app",
        desc: "一个使用 Vue.js 开发所有前端应用的框架",
        link: "https://uniapp.dcloud.net.cn",
      },
      {
        icon: "https://mpxjs.cn/favicon.ico",
        title: "Mpx",
        desc: "增强型跨端小程序框架",
        link: "https://mpxjs.cn",
      },
      {
        icon: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
        title: "Vant Weapp",
        desc: "轻量、可靠的小程序 UI 组件库",
        link: "https://vant-contrib.gitee.io/vant-weapp/#/home",
      },
      {
        icon: "https://www.uviewui.com/favicon.ico",
        title: " uView",
        desc: "是全面兼容nvue的uni-app生态框架",
        link: "https://www.uviewui.com/",
      },
    ],
  },
  // Node 相关
  {
    title: "Node 相关",
    items: [
      {
        icon: "https://nodejs.org/static/images/favicons/favicon.png",
        title: "Node.js",
        desc: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境",
        link: "https://nodejs.org/zh-cn",
      },
      {
        icon: "https://expressjs.com/images/favicon.png",
        title: "Express",
        desc: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
        link: "https://expressjs.com",
      },
      {
        icon: "/icons/koa.svg",
        title: "Koa",
        desc: "基于 Node.js 平台的下一代 web 开发框架",
        link: "https://koajs.com",
      },
      {
        icon: "https://www.eggjs.org/favicon.png",
        title: "Egg",
        desc: "为企业级框架和应用而生",
        link: "https://www.eggjs.org/zh-CN",
      },
      {
        icon: "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
        title: "Nest.js 中文文档",
        desc: "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架",
        link: "https://docs.nestjs.cn",
      },
      {
        icon: "https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png",
        title: "Npm",
        desc: "是 npm 注册表和 npm CLI 背后的公司",
        link: "https://www.npmjs.com/",
      },
    ],
  },
  // 数据可视化
  {
    title: "可视化",
    items: [
      {
        icon: "https://echarts.apache.org/zh/images/favicon.png",
        title: "ECharts",
        desc: "一个基于 JavaScript 的开源可视化图表库",
        link: "https://echarts.apache.org/zh/index.html",
      },
      {
        icon: "https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",
        title: "AntV",
        desc: "蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。",
        link: "https://antv.vision/zh/",
      },
      {
        icon: "https://d3js.org/logo.png",
        title: "D3.js",
        desc: "一个遵循 Web 标准用于可视化数据的 JavaScript 库",
        link: "https://d3js.org",
      },
      {
        icon: "https://www.chartjs.org/favicon.ico",
        title: "Chart.js",
        desc: "一个简单而灵活的 JavaScript 图表库",
        link: "https://www.chartjs.org",
      },
      {
        icon: "https://threejs.org/files/favicon.ico",
        // icon: 'https://threejs.org/files/favicon_white.ico',
        title: "Three.js",
        desc: "JavaScript 3d 库",
        link: "https://threejs.org",
      },
    ],
  },
  // 编译&构建&打包
  {
    title: "编译&构建&打包",
    items: [
      {
        icon: "https://www.webpackjs.com/icon_180x180.png",
        title: "Webpack 中文网",
        desc: "一个用于现代 JavaScript 应用程序的静态模块打包工具",
        link: "https://www.webpackjs.com",
      },
      {
        icon: "https://cn.vitejs.dev/logo.svg",
        title: "Vite 中文文档",
        desc: "下一代前端工具链",
        link: "https://cn.vitejs.dev",
      },
      {
        icon: "https://www.rollupjs.com/img/favicon.png",
        title: "Rollup",
        desc: "Rollup 是一个 JavaScript 模块打包器",
        link: "https://www.rollupjs.com",
      },
      {
        icon: "https://turbo.build/images/favicon-dark/apple-touch-icon.png",
        title: "Turbo",
        desc: "Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust",
        link: "https://turbo.build",
      },
      {
        icon: "https://www.babeljs.cn/img/favicon.png",
        title: "Babel",
        desc: "Babel 是一个 JavaScript 编译器",
        link: "https://www.babeljs.cn",
      },
      {
        icon: "https://esbuild.github.io/favicon.svg",
        title: "esbuild",
        desc: "An extremely fast bundler for the web",
        link: "https://esbuild.github.io",
      },
      {
        icon: "https://swc.rs/favicon/apple-touch-icon.png",
        title: "SWC",
        desc: "Rust-based platform for the Web",
        link: "https://swc.rs",
      },
    ],
  },
  // 站点生成器
  {
    title: "站点生成器",
    items: [
      {
        icon: "https://astro.build/favicon.svg",
        title: "Astro",
        desc: "一个现代化的轻量级静态站点生成器",
        link: "https://astro.build",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "VitePress",
        desc: "由 Vite 和 Vue 驱动的静态网站生成器",
        link: "https://vitepress.dev",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "VuePress",
        desc: "Vue 驱动的静态网站生成器",
        link: "https://vuepress.vuejs.org/zh",
      },
      {
        icon: "https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png",
        title: "dumi",
        desc: "基于 Umi 为组件研发而生的静态站点框架",
        link: "https://d.umijs.org",
      },
      {
        icon: "https://docusaurus.io/zh-CN/img/docusaurus.ico",
        title: "Docusaurus",
        desc: "基于 React 的静态网站生成器",
        link: "https://docusaurus.io/zh-CN",
      },
    ],
  },
  // 图标动画库
  {
    title: "图标动画库",
    items: [
      {
        icon: "https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg",
        title: "iconfont",
        desc: "国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能",
        link: "https://www.iconfont.cn",
      },
      {
        icon: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
        title: "IconPark 图标库",
        desc: "IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标",
        link: "https://iconpark.oceanengine.com/official",
      },
      {
        icon: "https://emoji.muan.co/appicon.png",
        title: "Emoji searcher",
        desc: "Emoji 表情大全",
        link: "",
      },
      {
        icon: "https://gsap.com/favicon-32x32.png",
        title: "GreenSock",
        desc: "用代码制作动画",
        link: "https://greensock.com/docs/v3",
      },
      {
        icon: "https://www.webfx.com/wp-content/uploads/2021/10/favicon.png",
        title: "emoji-cheat-sheet",
        desc: "emoji 表情大全",
        link: "https://www.webfx.com/tools/emoji-cheat-sheet/",
      },
      {
        icon: "https://emojipedia.org/favicon.ico",
        title: "emojipedia",
        desc: "emoji 表情",
        link: "https://emojipedia.org/",
      },
      {
        icon: "https://gitmoji.dev/static/favicon-32x32.png",
        title: "gitmoji",
        desc: "An emoji guide for your commit messages",
        link: "https://gitmoji.dev/",
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        title: "emoji表情库",
        desc: "github emoji表情库",
        link: "https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs",
      },
    ],
  },
  // 前端学习资料
  {
    title: "前端学习资料",
    items: [
      {
        icon: "https://tlias-stu.boxuegu.com/favicon.ico",
        title: "Tlias",
        desc: "黑马程序员学习中心",
        link: "https://tlias-stu.boxuegu.com/home",
      },
      {
        icon: "https://cdn.apifox.cn/app/project-icon/builtin/19.jpg",
        title: "黑马前端接口总集合",
        desc: "黑马前端项目接口",
        link: "https://apifox.com/apidoc/shared-fa9274ac-362e-4905-806b-6135df6aa90e/doc-842135",
      },
      {
        icon: "https://developer.mozilla.org/favicon.ico",
        title: "MDN | Web 开发者指南",
        desc: "Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资",
        link: "https://developer.mozilla.org/zh-CN",
      },
      {
        icon: "https://static.jyshare.com/images/favicon.ico",
        title: "菜鸟教程",
        desc: "学的不仅是技术，更是梦想！",
        link: "https://www.runoob.com",
      },
      {
        icon: "/icons/es6.svg",
        title: "ES6 入门教程",
        desc: "阮一峰的网络日志",
        link: "http://es6.ruanyifeng.com",
      },
    ],
  },
  // 技术社区
  {
    title: "技术社区",
    items: [
      {
        title: "Github",
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        desc: "一个面向开源及私有软件项目的托管平台",
        link: "https://github.com",
      },
      {
        icon: "https://hellogithub.com/favicon/favicon-32x32.png",
        title: "Hello Github",
        desc: "分享GitHub上入门级有趣的开源项目",
        link: "https://hellogithub.com/",
      },
      {
        icon: "https://gitee.com/favicon.ico",
        title: "gitee",
        desc: "DevOps一站式研发效能平台",
        link: "https://gitee.com/",
      },
      {
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
        title: "Stack Overflow",
        desc: "全球最大的技术问答网站",
        link: "https://stackoverflow.com",
      },
      {
        icon: "https://g.csdnimg.cn/static/logo/favicon32.ico",
        title: "CSDN",
        desc: "中文最大的技术社区",
        link: "https://www.csdn.net/",
      },
      {
        icon: "https://static.oschina.net/new-osc/img/favicon.ico",
        title: "开源中国",
        desc: "目前国内最大的开源技术社区",
        link: "https://www.oschina.net/",
      },
      {
        title: "稀土掘金",
        icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",
        desc: "面向全球中文开发者的技术内容分享与交流平台",
        link: "https://juejin.cn",
      },
      {
        title: "编程导航",
        icon: "https://www.code-nav.cn/favicon.ico",
        desc: "博主鱼皮技术内容分享与交流平台",
        link: "https://www.code-nav.cn/",
      },
      {
        title: "V2EX",
        icon: "https://www.v2ex.com/static/icon-192.png",
        desc: "一个关于分享和探索的地方",
        link: "https://www.v2ex.com",
      },
      {
        title: "SegmentFault 思否",
        icon: "https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png",
        desc: "技术问答开发者社区",
        link: "https://segmentfault.com",
      },
      {
        title: "博客园",
        icon: "http://www.cxy521.com/static/img/index/tech/cnblogs.png",
        desc: "博客园是一个面向开发者的知识分享社区",
        link: "https://www.cnblogs.com",
      },
      {
        title: "知乎",
        icon: "https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png",
        desc: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",
        link: "https://juejin.cn",
      },
      {
        title: "51CTO",
        icon: "https://s5-media.51cto.com/cms/static/favicon.ico",
        desc: "中国领先的IT技术网站",
        link: "https://www.51cto.com/",
      },
      {
        title: "InfoQ",
        icon: "https://static001.infoq.cn/static/write/img/write-favicon.jpg",
        desc: "一个实践驱动的技术社区",
        link: "https://xie.infoq.cn/",
      },
      {
        title: "ChinaUnix",
        icon: "http://www.cxy521.com/static/img/index/tech/cu.png",
        desc: "中国最大的Linux/Unix技术社区网站",
        link: "http://www.chinaunix.net/",
      },
      {
        title: "Ruby China",
        icon: "https://l.ruby-china.com/photo/2016/c309db0b49cab85a32f756541ea0e2b0.png",
        desc: "国内最权威的Ruby社区",
        link: "https://ruby-china.org/",
      },
      {
        title: "Golang",
        icon: "http://www.cxy521.com/static/img/index/tech/golang.ico",
        desc: "Go语言爱好者的学习家园",
        link: "https://studygolang.com/",
      },
      {
        title: "黑苹果",
        icon: "https://github.githubassets.com/favicons/favicon.png",
        desc: "Hackintosh长期维护模式EFI及安装教程",
        link: "https://github.com/daliansky/Hackintosh",
      },
    ],
  },
  // 摸鱼专用
  {
    title: "摸鱼专用",
    items: [
      {
        icon: "https://momoyu.cc/icon-192.png",
        title: "摸摸鱼热榜",
        // desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
        link: "https://momoyu.cc",
      },
      {
        icon: "https://v-music.vercel.app/favicon.ico",
        title: "网页版网易云",
        desc: "macos风格网页端网易云",
        link: "https://v-music.vercel.app/#/discovery",
      },
      {
        icon: "https://v.qq.com/favicon.ico",
        title: "腾讯视频",
        // desc: '中国领先的在线视频媒体平台，海量高清视频在线观看',
        link: "https://v.qq.com",
      },
      {
        icon: "https://static.hdslb.com/mobile/img/512.png",
        title: "哔哩哔哩",
        // desc: '',
        link: "https://www.bilibili.com",
      },
      {
        icon: "https://yinghuadongman.cn/upload/mxprocms/20240825-1/cd920da4b791b39a563821f39f0647f6.png",
        title: "樱花动漫",
        desc: "专注动漫的网站",
        link: "https://yinghuadongman.cn/",
      },
      {
        icon: "https://dl.dushe1.app/dsdy/01/images/favicon.ico",
        title: "毒舌电影",
        desc: "免费观影、电视剧、动漫、综艺等",
        link: "https://www.dushe1.app/",
      },
      {
        icon: "https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png",
        title: "YouTube",
        desc: "",
        link: "https://www.youtube.com",
      },
      {
        icon: "https://abs.twimg.com/favicons/twitter.3.ico",
        title: "Twitter",
        desc: "推特现改名X",
        link: "https://twitter.com",
      },
      {
        icon: "https://www.pixiv.net/favicon20250122.ico",
        title: "Pixiv",
        desc: "插画",
        link: "https://www.pixiv.net",
      },
      {
        icon: "https://wallhaven.cc/favicon.ico",
        title: "wallhaven",
        desc: "壁纸引擎替代",
        link: "https://wallhaven.cc/",
      },
    ],
  },
  // 科学上网
  {
    title: "科学上网",
    items: [
      {
        icon: "",
        title: "Clash for Windows汉化版",
        desc: "Windows电脑 Clash客户端",
        link: "https://github.com/Z-Siqi/Clash-for-Windows_Chinese/releases",
      },
      {
        icon: "",
        title: "V2RayN for Windows",
        desc: "Windows 电脑客户端V2RayN",
        link: "https://github.com/2dust/v2rayN/releases",
      },
      {
        icon: "https://www.mojie.cyou/favicon.ico",
        title: "魔戒",
        desc: "科学上网机场",
        link: "https://www.mojie.cyou/#/plan",
      },
      {
        icon: "https://fnyun.eu.org/favicon.ico",
        title: "飞鸟云",
        desc: "科学上网机场",
        link: "https://fnyun.eu.org/#/dashboard",
      },
      {
        icon: "https://smsactivate.s3.eu-central-1.amazonaws.com/assets/img/activate_favicon.png",
        title: "SMS-activate",
        desc: "接码平台",
        link: "https://sms-activate.org/ru/freePrice#activation",
      },
    ],
  },
];
