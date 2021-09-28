<template>
  <home />
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};

Home;
</script>

<style>
#app {
  font-family: "Courier New", Courier, monospace !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

body {
  background: #141518;
  margin: 0%;
}
</style>
