const toggleBtn = document.querySelector('.navbar_toggleButton');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_links');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    console.log("hello");
})