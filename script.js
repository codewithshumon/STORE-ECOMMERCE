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