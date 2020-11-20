<template>
  <div id="app">
    <el-container>
      <el-header><Top></Top></el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Top from "./views/top/Top.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Top
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0px;
  border-bottom: solid 1px #e6e6e6;
  padding-bottom: 60px;
}

.el-main {
  color: #333;
  text-align: center;
}
body {
  margin-top: 0px;
}
</style>
