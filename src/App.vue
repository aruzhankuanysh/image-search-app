<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
}
a {
  color: inherit !important;
  text-decoration: none;
}
.main_container {
  max-width: 1440px;
  margin: auto;
  padding: 0 220px;
}
.horizontal_line {
  height: 16px;
  background-color: #c4c4c4;
}
@media(max-width: 1024px) {
  .main_container {
    padding: 0 10%;
  }
}
@media(max-width: 768px) {
  .main_container {
    padding: 0 20px;
  }
  .d_mobile_none {
    display: none !important;;
  }
}
</style>
