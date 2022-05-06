navbar = document.querySelector('.navbar');
navItems = document.querySelector('.nav-items');
searchBar = document.querySelector('.search-bar');
burger = document.querySelector('.burger');

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav');
    navItems.classList.toggle('o-nav');
    searchBar.classList.toggle('o-nav');
})