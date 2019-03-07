<template>
  <div class="page-header">
    <div class="theme-image-container" />
    <div class="title-container">
      <div class="wedding-title is-hidden-mobile">
        Our Memories
      </div>
    </div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="wedding-title is-hidden-desktop is-size-2 flex-center">
          Our Memories
        </div>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbar" class="navbar-menu navbar-center">
        <div class="navbar is-size-5">
          <n-link tag="a" to="/" class="navbar-item" exact>
            Home
          </n-link>
          <n-link tag="a" to="/photos" class="navbar-item">
            Photos
          </n-link>
        </div>
      </div>
    </nav>
  </div>
</template>
