const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

home.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})
about.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})
portfolio.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})
contact.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

function openPage(x,y){
    let indice = x;
    let target = y;
    let url = '/content'+ indice +'.html';
    let xml = new XMLHttpRequest();

    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status == 200){
            document.getElementById(target).innerHTML = xml.responseText;
        }
    };

    xml.open("GET", url, true);

    xml.send()
}