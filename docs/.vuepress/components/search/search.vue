<template>
  <div style='width:570px'>
    <g-search bg-color="#09c" @action="searchAction" v-model="value" action-text-color="#fff"><span slot="search">确定</span></g-search>
    <g-search placeholder="自定义placeholder" 
    v-model="value" 
    @input="inputAction" 
    action-text-color="#777" 
    cancel-text-color="#777" 
    @action="searchAction" 
    @cancel="searchCancel">
      <span slot="search">搜索</span><span slot="cancel">取消</span>
    </g-search>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:""
    }
  },
  methods: {
    inputAction(){

    },
    searchAction(){
      this.value = ''
    },
    searchCancel(){
      this.value = ''
    }
  }
}
</script>

