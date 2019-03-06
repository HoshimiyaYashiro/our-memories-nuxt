'use strict'
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
