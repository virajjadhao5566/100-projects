const btn = document.querySelector(".generate");
const num = document.querySelector(".count")


let rand = Math.floor(Math.random()*100);
const generateNumber = () =>{
    const rand = Math.floor(Math.random()*100);
    num.innerHTML = rand
}
btn.addEventListener("click",generateNumber)