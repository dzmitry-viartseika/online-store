<template>
  <div id="app">
    <vMainWrapper/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import vMainWrapper from './components/v-main-wrapper.vue';

  export default {
    name: 'app',
    components: {
      vMainWrapper,
    }
  }
</script>

<style lang="scss">
  @import "assets/sass/styles.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
