/*=========================================
        PORTFOLIO 2026
        script.js
=========================================*/

// ------------------------------
// Плавная прокрутка
// ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ------------------------------
// Липкое меню
// ------------------------------

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

// ------------------------------
// Кнопка наверх
// ------------------------------

const toTop=document.getElementById("toTop");

if(toTop){

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

toTop.classList.add("show");

}else{

toTop.classList.remove("show");

}

});

toTop.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

// ------------------------------
// Печатающийся текст
// ------------------------------

const typing=document.getElementById("typing");

if(typing){

const words=[

"IT Project Manager",

"STEM Trainer",

"Engineer",

"Project Coordinator"

];

let wordIndex=0;
let charIndex=0;
let deleting=false;

function typeEffect(){

const word=words[wordIndex];

if(!deleting){

charIndex++;

}else{

charIndex--;

}

typing.textContent=word.substring(0,charIndex);

if(!deleting && charIndex===word.length){

deleting=true;

setTimeout(typeEffect,1500);

return;

}

if(deleting && charIndex===0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

setTimeout(typeEffect,deleting?50:100);

}

typeEffect();

}

// ------------------------------
// Анимация появления
// ------------------------------

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

document.querySelectorAll("section,.project,.skill-card,.timeline-item,.cert,.contact-box").forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});

// ------------------------------
// Подсветка активного меню
// ------------------------------

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let currentSection="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(window.scrollY>=top){

currentSection=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+currentSection){

link.classList.add("active");

}

});

});

// ------------------------------
// Мобильное меню
// ------------------------------

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("open");

});

}

// ------------------------------
// Закрывать меню после клика
// ------------------------------

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

if(nav.classList.contains("open")){

nav.classList.remove("open");

}

});

});

// ------------------------------
// Прелоадер (если есть)
// ------------------------------

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});
// ================================
// Анимация счетчиков
// ================================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        const suffix = counter.dataset.suffix || "";

        let current = 0;

        const duration = 1800;

        const increment = target / (duration / 16);

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                counter.textContent = Math.floor(current) + suffix;

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target + suffix;

            }

        };

        updateCounter();

        observer.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => observer.observe(counter));
