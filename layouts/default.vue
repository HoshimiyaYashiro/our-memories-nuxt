<template>
  <section class="root">
    <div class="container page-container test-sass">
      <app-header />
      <div class="page-body">
        <div class="accent accent-top"></div>
        <nuxt />
        <div class="accent accent-bottom"></div>
      </div>
      <div class="page-footer">
        <div class="theme-image-container theme-image-bottom" />
      </div>
    </div>
  </section>
</template>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
<script>
import Header from '../components/Header.vue'
export default {
  components: {
    appHeader: Header
  }
}
</script>
