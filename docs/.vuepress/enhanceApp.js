/**
 * 扩展 VuePress 应用
 */
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import "ggbeng-ui/package/gui.min.css";  
import GGbengUI from 'ggbeng-ui';
import VueECharts from 'vue-echarts' //注册图表

// import '../.vuepress/public/css/index.css'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(GGbengUI)
  Vue.use(VueHighlightJS)
  Vue.component('chart', VueECharts)
}