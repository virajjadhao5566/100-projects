const btn = document.querySelector('.generate')
const colo = document.querySelector('.color')

const generateColor = () =>{
    const randomColor = Math.random().toString(16).substring(2,8);
    colo.innerHTML = "#" + randomColor
    document.body.style.backgroundColor = "#" + randomColor
}

btn.addEventListener("click",generateColor);