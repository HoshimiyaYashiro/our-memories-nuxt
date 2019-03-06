<template>
  <section class="index">
    <figure class="image is-2by1">
      <img src="bg/index.jpg">
    </figure>
  </section>
</template>

<script>
export default {
  components: {},
  mounted() {
    // Toggles
    const $burgers = $('.burger')
    if ($burgers.length > 0) {
      $burgers.each((index, el) => {
        const $el = $(el)
        $el.on('click', () => {
          const target = $el.data('target')
          const $target = $('#' + target)
          $el.toggleClass('is-active')
          $target.toggleClass('is-active')
        })
      })
    }
  }
}
</script>
