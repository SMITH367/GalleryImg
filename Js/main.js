

//Dinamic change of background in the hero

const hero = document.getElementById("hero");

let ramdom =  Math.floor(Math.random() * (4 - 1)) + 1;

if(ramdom ===1){

    hero.classList.add("hero1");

} else if(ramdom ===2){

    hero.classList.add("hero2");

} else if(ramdom ===3){

    hero.classList.add("hero3");

}

//side bar

const toogle = document.querySelector(".toogle");

toogle.addEventListener("click", function(){
    document.getElementById("side-bar").classList.toggle("active"); 

})