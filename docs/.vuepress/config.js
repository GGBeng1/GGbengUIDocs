module.exports = {
  title: "GGBeng UI", // 设置网站标题
  base: "/GGbengUI/",
  description: "基于vue2.0开发，支持es6，具有复用性，一致性等优点", //描述
  dest: "./dist", // 设置输出目录
  port: 2333, //端口
  themeConfig: {
    //主题配置
    // 添加导航栏
    nav: [
      { text: "主页", link: "/" }, // 导航条
      { text: "组件文档", link: "/baseComponents/" },
      {
        text: "github",
        // 这里是下拉列表展现形式。
        items: [
          { text: "GGbengUI", link: "https://github.com/GGBeng1/GGbengUI" },
          {
            text: "BUG提交",
            link: "https://www.ggbeng.xyz"
          }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      "/baseComponents/": [
        {
          title: "文档",
          collapsable: false,
          children: ["base/updata", "base/doc"]
        },
        {
          title: "组件",
          collapsable: false,
          children: [
            "base/button",
            "base/modal",
            "base/switch",
            "base/grid",
            "base/icon",
            "base/flexbox",
            "base/radio",
            "base/checkbox",
            "base/select",
            "base/tag",
            "base/search",
            "base/navbar",
            "base/tabbar"
          ]
        }
        // {
        //   title: "工具类组件",
        //   collapsable: true,
        //   children: []
        // },
        // {
        //   title: "方法类函数",
        //   collapsable: true,
        //   children: []
        // }
      ]
    }
  }
};
