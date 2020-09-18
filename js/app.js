function init() {
  const hamburgerMenu = document.querySelector('.menu__hamburger')
  const navbarWrapper = document.querySelector('.navbar__wrapper')

  hamburgerMenu.addEventListener('click', (e) => {
    const target = e.target.closest('.menu__hamburger')
    target.classList.toggle('open')
    navbarWrapper.classList.toggle('open')
  })

  //va
  VanillaTilt.init(document.querySelectorAll('.product__item'), {
    max: 25,
    speed: 400,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  })
  VanillaTilt.init(document.querySelectorAll('.slide'), {
    max: 25,
    speed: 400,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  })
  //testimoniasls variables
  const testimonialItems = document.querySelectorAll('.testimonials_item')
  const nextTestimonialBtn = document.querySelector('.testimonials_btns .btn__right')
  const prevTestimonialBtn = document.querySelector('.testimonials_btns .btn__left')
  const slideTotalsTestimonials = document.querySelector('.testimonials_slides .total_slide')
  const slideCurrentNum = document.querySelector('.testimonials_slides .current_slide')
  changeSlideCount(slideTotalsTestimonials, testimonialItems.length)
  let index = 0

  nextTestimonialBtn.addEventListener('click', (e) => {
    const el = e.target.closest('.btn__right')
    if (el) {
      index = nextEl(testimonialItems, 'active', index)
      changeSlideCount(slideCurrentNum, index + 1)
    }
  })
  prevTestimonialBtn.addEventListener('click', (e) => {
    const el = e.target.closest('.btn__left')
    if (el) {
      index = prevEl(testimonialItems, 'active', index)
      changeSlideCount(slideCurrentNum, index + 1)
    }
  })

  //hero slider variables
  const slides = document.querySelectorAll('.slide')
  const nextBtnSlide = document.querySelector('.hero__btns .btn__right')
  const prevBtnSlide = document.querySelector('.hero__btns .btn__left')
  const curreSlideNum = document.querySelector('.hero__footer .current_slide')
  const slideTotals = document.querySelector('.hero__footer .total_slide')
  let currentIndex = 0

  changeSlideCount(slideTotals, slides.length)
  nextBtnSlide.addEventListener('click', (e) => {
    const el = e.target.closest('.hero__btns .btn__right')
    if (el) {
      currentIndex = nextEl(slides, 'active', currentIndex)
      changeSlideCount(curreSlideNum, currentIndex + 1)
    }
  })

  prevBtnSlide.addEventListener('click', (e) => {
    const el = e.target.closest('.hero__btns .btn__left')
    if (el) {
      currentIndex = prevEl(slides, 'active', currentIndex)
      changeSlideCount(curreSlideNum, currentIndex + 1)
    }
  })

  //remove class
  function removeClass(items, clssName) {
    items.forEach((el) => el.classList.remove(clssName))
  }
  function changeSlideCount(el, number) {
    el.textContent = number
  }
  //next el
  function nextEl(items, clssName, count) {
    removeClass(items, clssName)
    count++
    if (count >= items.length) count = 0
    items[count].classList.add(clssName)
    return count
  }
  function prevEl(items, clssName, count) {
    removeClass(items, clssName)
    count--
    if (count <= 0) count = items.length - 1
    items[count].classList.add(clssName)
    return count
  }
}
init()
