const btn = document.querySelector('.btn')
const menu = document.querySelector('.menu')
const links = document.querySelector(".links")

// menu.addEventListener("click" , function(){
//     links.style.display = "flex"
//     console.log("hello")
// })


// btn.addEventListener("click", function(){
//     links.style.display = "none"
// })

function toggleMenu(show){
    links.style.display = show? "block" : "none"
    console.log("hello")
}