let menuBarIcon = document.querySelector(".menu-bar-icon");
let menuBar = document.querySelector("menu");
menuBarIcon.addEventListener("click", barShow);

function barShow(){
    menuBarIcon.classList.toggle('fa-times');
    if (menuBar.style.right !== '0%') {
        menuBar.style.right = '0%';
      } else {
        menuBar.style.right = '-110%';
      }
}

