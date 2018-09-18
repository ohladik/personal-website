<template>
  <transition name="page" mode="out-in">
    <div class="container">
      <navigation/>
      <nuxt/>
      <app-footer/>
    </div>
  </transition>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    Navigation,
    AppFooter,
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600");

html {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #f7fbfb;
  max-width: 936px;
  min-height: 100vh;
  margin: 0px auto;
  padding: 0 36px;
}

html,
body {
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: stretch;
}
</style>