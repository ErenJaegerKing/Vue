<template>
  <div class="site-aside-container">
    <div class="avatar">
      <Avatar
        url="https://drawingbed-686.pages.dev/myblog/202409241339167.png"
      />
    </div>
    <h1 class="title">我是艾伦</h1>
    <Menu />
    <Contact />
    <p class="footer">黑ICP备17001719号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar {
  margin: 0 auto;
}

.footer {
  text-align: center;
  font-size: 12px;
}

.title {
  font-size: 1em;
  color: #fff;
  text-align: center;
}
</style>
