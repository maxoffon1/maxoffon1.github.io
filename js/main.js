/*swiper*/

const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	slidesPerGroup: 1,
    loop: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
	  clickable: true
  }
});

/*tabs*/

let tabsBtn = document.querySelectorAll(".tabs-nav__btn");
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(elem => {
  elem.addEventListener('click', e => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(btn => { btn.classList.remove('tabs-nav__btn--active')});
    elem.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(elem => { elem.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

/*search*/

let search = document.querySelector('.header__search');
let search_field = document.querySelector('.search');
let closeBtn = document.querySelector('.search-close');
search.addEventListener('click', () => {
  search_field.classList.toggle('hidden');
});
closeBtn.addEventListener('click', () => {
  search_field.classList.toggle('hidden');
});

/*accordion*/

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});

let questions = document.querySelectorAll(".accordion");
questions.forEach(elem => {
  elem.querySelector('.question').addEventListener('click', () => {
    let mark = elem.querySelector('svg');
    if (mark.classList.contains('rotation')) {
      mark.classList.toggle('reverse-rotation');
    }
    else {
      mark.classList.toggle('rotation');
    }
    elem.querySelector('.question').classList.toggle('noAfter');
    elem.querySelector('.accordion__content').classList.toggle('hidden');
  });
});

/*burger*/

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__nav__link');
let closeMenuBtn = menu.querySelector('.close-menu-btn');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(elem => {
  elem.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
});

closeMenuBtn.addEventListener('click', () => {
  burger.classList.remove('burger--active');
  menu.classList.remove('header__nav--active');
  document.body.classList.remove('stop-scroll');
});