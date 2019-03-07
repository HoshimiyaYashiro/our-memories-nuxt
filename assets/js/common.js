module.exports = {
  initIndexPage: function() {
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
