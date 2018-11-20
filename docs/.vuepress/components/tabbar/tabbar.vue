<template>
  <g-tabbar v-model="active">
    <g-tabbar-item icon="g__icon--home" type="link" href="" dot>首页</g-tabbar-item>
    <g-tabbar-item icon="g__icon--mall" :href="hrefObj" badge="8" @click="routerAction">
      <span slot="badge">8</span>商城
    </g-tabbar-item>
    <g-tabbar-item icon="g__icon--add" href="add" class="add"></g-tabbar-item>
    <g-tabbar-item href="###" img-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542713902247&di=2cb0e78883a4de1568e7ba658e4d77a8&imgtype=0&src=http%3A%2F%2Flife.southmoney.com%2Ftuwen%2FUploadFiles_6871%2F201808%2F20180808151217196.jpg">自定义图</g-tabbar-item>
    <g-tabbar-item icon="g__icon--my" href="my" badge="11">我的</g-tabbar-item>
  </g-tabbar>
</template>
<script>
export default {
  data() {
    return {
      hrefObj: { path: '/mall', name: 'mall', params: { userId: 123 } },
      active: '/mall'
    }
  }
}
</script>

