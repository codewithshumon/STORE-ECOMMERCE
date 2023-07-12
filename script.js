//copy menu for mobile

function copyMenu ( ) {

    //copy inside desk dpt to mobile dpt
    let dptCategory = document.querySelector('.dpt-cart');
    let dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

     //copy inside desk nav to mobile nav
     let mainNav = document.querySelector('.header-nav nav');
     let navPlace = document.querySelector('.off-canvas nav');
     navPlace.innerHTML = mainNav.innerHTML;
     
     //copy inside desk topnav to mobile topnav
     let topNav = document.querySelector('.header-top .wrapper');
     let topPlace = document.querySelector('.off-canvas .thetop-nav');
     topPlace.innerHTML = topNav.innerHTML;


}

copyMenu()

//show mobile menu

const menuButton = document.querySelector('.trigger');
const closeButton = document.querySelector('.t-close');
const addClass = document.querySelector('.site');

menuButton.addEventListener('click', function() {
    addClass.classList.toggle('showmenu')
});

closeButton.addEventListener('click', function(){
    addClass.classList.toggle('showmenu')
})



//show sub menu on mobile
const subMenu = document.querySelectorAll('.has-chaild .icon-small');

subMenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    subMenu.forEach((iitem) => iitem != this ? iitem.closest('.has-chaild').classList.remove('expand') : null);
    if (this.closest('.has-chaild').classList != 'expand') {
        this.closest('.has-chaild').classList.toggle('expand')
    }
}



// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
