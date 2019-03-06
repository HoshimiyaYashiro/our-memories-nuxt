<template>
  <section class="root">
    <div class="container page-container test-sass">
      <div class="page-header">
        <div class="theme-image-container"></div>
        <div class="title-container">
          <div class="wedding-title">Our Memories</div>
        </div>        
      </div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
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

        <div id="navbarBasicExample" class="navbar-menu navbar-center">
          <div class="navbar is-size-5">
            <a class="navbar-item">Home</a>
            <a class="navbar-item">Photos</a>
          </div>
        </div>
      </nav>
      <div class="page-body">
        <nuxt />
      </div>
      <div class="page-footer">
        <div class="theme-image-container theme-image-bottom"></div>       
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

<style lang="scss" scoped>
.theme-image-container {
  background-image: url('/bg/bg-top.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
  height: 120px;
}
.theme-image-bottom {
  background-image: url('/bg/bg-bottom.png');
  background-position: center bottom;
}
.title-container {
  text-align: center;
}
.wedding-title {
  font-family: 'Tangerine', cursive;
  font-size: 4rem;
  font-style: normal;
  font-weight: normal;
  color: #685850;
}
</style>
