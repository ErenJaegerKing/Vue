export default function(refValue) {
  return {
    mounted() {
      // 事件总线，监听主滚动
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
      // 自己的滚动监听
      this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
    },
    beforeDestroy() {
      // 通知：我要销毁组件了
      this.$bus.$emit("mainScroll");
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
      this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
    },
    methods: {
      handleSetMainScroll(scrollTop) {
        this.$refs[refValue].scrollTop = scrollTop;
      },
      handleMainScroll() {
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      },
    },
  };
}
