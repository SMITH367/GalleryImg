

//Dinamic change of background in the hero

const hero = document.getElementById("hero");

let ramdom =  Math.floor(Math.random() * (3 - 1)) + 1;

if(ramdom ===1){

    hero.classList.add("hero1");

} else if(ramdom ===2){

    hero.classList.add("hero2");

} 

//side bar

const toogle = document.querySelector(".toogle");

toogle.addEventListener("click", function(){
    document.getElementById("side-bar").classList.toggle("active"); 

})


const navToogle = document.querySelector(".toogle-init");
const navMenu = document.querySelector(".nav-menu");
const sidebar = document.querySelector(".toogle");



navToogle.addEventListener("click",function() {
    navMenu.classList.toggle("nav-phone-visible");
    sidebar.classList.toggle("hidden");
  
   
})