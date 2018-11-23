<template>
  <div style='width: 100%'>
    <g-flexbox direction="vertical" class='flex'>
      <div>普通div</div>
      <g-flexbox-item style='margin: 10px auto'>direction="vertical" 的垂直flex div</g-flexbox-item>
      <div>普通div</div>
    </g-flexbox>
  </div>
</template>
<style scoped>
.flex.g__flexbox {
	border: 1px solid #eee;
	font-size: 16px;
	width: 100%;
}
.flex.g__flexbox.g__flex--vertical div {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
}
.flex.g__flexbox div:nth-child(odd) {
    background: #ededed;
    width: 100%;
    height: 50px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
</style>
