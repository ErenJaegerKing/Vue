<template>
  <div>
    <h1>App组件</h1>
    <p>姓：{{ firstName }}</p>
    <p>名：{{ lastName }}</p>
    <p>姓名：{{ fullName }}</p>
    <p>姓名：{{ fullName }}</p>
    <p>姓名：{{ fullName }}</p>
    <p>姓名：{{ fullName }}</p>
    <button @click="fullName = '你好' ">修改姓名为姬成</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      firstName: "yuan",
      lastName: "jin",
    };
  },
  computed: {
    fullName: {
      get() {
        console.log("fullname called");
        return this.firstName + " " + this.lastName + Date.now();
      },
      set(val) {
        console.log("正在设置全名",val);
      }
    },
  },
  methods: {
    getFullName() {
      console.log("method called");
      return this.firstName + this.lastName;
    }
  }
};
</script>