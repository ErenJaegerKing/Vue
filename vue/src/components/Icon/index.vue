<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  erweima: "icon-zhuye",
  kaixin: "icon-guanyu",
  wode: "icon-boke",
};
export const type = Object.keys(classMap);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/c/font_4672488_lhu44p37o3m.css";
</style>
