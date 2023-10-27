// const elButton = document.querySelector(".btn");
// const elButtonMenu = document.querySelector(".menu");
// const elButtonExit = document.querySelector(".exit");
// const elNav = document.querySelector(".nav");


// elButton.addEventListener("click", ()=> {
   
//     elButtonMenu.classList.toggle("menu__exit")
//     elButtonExit.classList.toggle("exit__menu")
//     elNav.classList.toggle("nav__blok")
// })


const elButton = document.querySelector(".btn");
const elButtonMenu = document.querySelector(".btn__menu");
const elButtonExit = document.querySelector(".btn__exit");
const elNavList = document.querySelector(".nav__list");


elButton.addEventListener("click", ()=> {
    elButtonMenu.classList.toggle("menu__exit")
    elButtonExit.classList.toggle("exit__menu")
    elNavList.classList.toggle("nav__blok")
}
)

