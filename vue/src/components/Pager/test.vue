<template>
    <div>
      <h1>App组件</h1>
      <Pager :total="total" :current="current" @pageChange="handlePageChange" />
    </div>
  </template>
  
  <script>
  import Pager from "./index";
  
  export default {
    components: {
      Pager,
    },
    data() {
      return {
        current: 20,
        total: 302,
      };
    },
    methods: {
      handlePageChange(newPage) {
        console.log(newPage);
        this.current = newPage;
      },
    },
  };
  </script>
  
  <style scoped></style>
  