<template>
  <div>
    <h1>App组件</h1>
    <Icon type="kaixin" />
  </div>
</template>

<script>
import Icon from "./components/Icon.vue";

export default {
  components: {
    Icon,
  },
};
</script>

<style scoped>
.iconfont {
  font-size: 26px;
  color: red;
}
</style>
