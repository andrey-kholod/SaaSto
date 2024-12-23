window.addEventListener('DOMContentLoaded', () => {
  const item1 = document.getElementById('price1')
  const item2 = document.getElementById('price2')
  const toggle = document.querySelector('input[type="checkbox"]')
  const slides = document.querySelectorAll('.testimonials__slide')
  const client = document.querySelector('.testimonials__photo')
  const burgerBtn = document.querySelector('.burger-button')
  const burgerMenu = document.querySelector('.burger__menu')
  const menuLinks = burgerMenu.querySelectorAll('.burger__menu-item')

  console.log(menuLinks)

  toggle.addEventListener('change', function () {
    if (toggle.checked) {
      item1.classList.remove("price__option-item--inverted")
      item2.classList.add("price__option-item--inverted")
    } else {
      item1.classList.add("price__option-item--inverted")
      item2.classList.remove("price__option-item--inverted")
    }
  })

  const toggleBurgerBtn = () => {
    burgerBtn.classList.toggle('burger-active')
    burgerMenu.classList.toggle('burger__menu-active')

    if (burgerBtn.classList.contains('burger-active')) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }

  burgerBtn.addEventListener('click', toggleBurgerBtn)

  menuLinks.forEach(e => e.addEventListener('click', toggleBurgerBtn))

  toggle.checked = true
  item2.classList.add("price__option-item--inverted")

  let i = 1
  setInterval(() => {
    slides[i].classList.add('testimonials__slide--active')
    client.style.background = `url("https://andrey-kholod.github.io/SaaSto/images/client-${i+1}.png") no-repeat center/cover, var(--color-accent-light) !important`

    slides.forEach((e, idx) => i !== idx && e.classList.remove('testimonials__slide--active'))

    if (i === 2) {
      i = 0
    } else {
      i++
    }

  },
    1300)
})