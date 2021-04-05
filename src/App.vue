<template>
  <div id="app">
    <NavMenu />
    <router-view />
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu/NavMenu";
export default {
  name: "App",
  components: {
    NavMenu,
  },
};
</script>

<style lang="scss">
@import "../src/styles/styles";
</style>
