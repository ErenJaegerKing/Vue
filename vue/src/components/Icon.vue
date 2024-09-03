<template>
  <i class="iconfont" :class="fontClass"></i>
</template>

<script>
const classMap = {
  erweima: "icon-erweima",
  kaixin: "icon-henkaixin",
  wode: "icon-wode",
};
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
@import "//at.alicdn.com/t/c/font_4672488_avzilcvwso4.css";
</style>
