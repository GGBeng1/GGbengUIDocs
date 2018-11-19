<template>
  <div style='width:400px'>
    <g-select :data="selectList" @change="selectAction" v-model="curSelected"></g-select>
    <div style='width:100%;border: 0.5px solid #ccc'></div>
    <g-select right :data="selectList" v-model="curSelected"></g-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectList: [
        { name: '请选择出行方式', value: 0 },
        { name: '巴士', value: 1 },
        { name: '快车', value: 2 },
        { name: '专车', value: 3 },
        { name: '顺风车', value: 4 },
        { name: '出租车', value: 5 },
        { name: '代驾', value: 6 }
      ],
      curSelected: '3',
    }
  },
  methods: {
    selectAction() {
      console.log(this.curSelected)
    }
  }
}
</script>
