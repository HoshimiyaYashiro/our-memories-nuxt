<template>
  <section class="root">
    <div class="container page-container">
      <div class="page-header">
        <div class="theme-image-container"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script');
@import 'assets/sass/common-styles.sass';
.theme-image-container {
  background-image: url('/bg/bg-top.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
  height: 120px;
}
.title-container {
  text-align: center;
}
.wedding-title {
  font-family: 'Dancing Script', cursive;
  font-size: 4.5rem;
  font-style: normal;
  font-weight: normal;
  color: #685850;
}
</style>
