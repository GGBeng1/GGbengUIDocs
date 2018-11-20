<template>
  <div style="width: 100%;">
    <g-flexbox class='flex'>
      <div>普通div</div>
      <g-flexbox-item style='text-align: center;'>默认的水平flex div</g-flexbox-item>
      <div>普通div</div>
    </g-flexbox>
  </div>
</template>
<style scoped>
.flex.g__flexbox {
	border: 1px solid #eee;
	font-size: 16px;
}
.flex.g__flexbox div:nth-child(odd) {
    background: #ededed;
    width: 100px;
    height: 50px;
    line-height: 50px; 
    text-align: center;
}
</style>

