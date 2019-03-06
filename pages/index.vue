<template>
  <section class="root">
    <div class="container page-container test-sass">
      <div class="page-header">
        <div class="theme-image-container"></div>
        <div class="wedding-title"></div>
      </div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>
          
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">Home</a>
            <a class="navbar-item">Documentation</a>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  mounted() {
    function getAll(selector) {
      return Array.prototype.slice.call(document.querySelectorAll(selector), 0)
    }

    // Toggles
    const $burgers = getAll('.burger')

    if ($burgers.length > 0) {
      $burgers.forEach($el => {
        $el.addEventListener('click', () => {
          const target = $el.dataset.target
          const $target = document.getElementById(target)
          $el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
    console.log('READY')
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script');
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
