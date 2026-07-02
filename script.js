/*======================================
        Плавная прокрутка
======================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*======================================
        Анимация появления блоков
======================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll("section,.stat-box,.card,.project,.skill").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


/*======================================
        Счетчики
======================================*/

const counters=document.querySelectorAll(".stat-box h3");

let started=false;

function runCounter(){

if(started) return;

started=true;

counters.forEach(counter=>{

const text=counter.innerText;

const number=parseInt(text.replace(/\D/g,""));

if(isNaN(number)) return;

let start=0;

const speed=Math.ceil(number/120);

function update(){

start+=speed;

if(start<number){

counter.innerHTML=start+

(text.includes("+")?"+":"")+

(text.includes("₸")?" ₸":"");

requestAnimationFrame(update);

}else{

counter.innerHTML=text;

}

}

update();

});

}

const stats=document.querySelector(".statistics");

const statsObserver=new IntersectionObserver(entries=>{

if(entries[0].isIntersecting){

runCounter();

}

});

statsObserver.observe(stats);


/*======================================
        Меню при прокрутке
======================================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>60){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});


/*======================================
        Подсветка активного меню
======================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
const words=[

"IT Project Manager",

"STEM Trainer",

"Engineer",

"IT Specialist"

];

let i=0;

let j=0;

let current="";

let deleting=false;

function type(){

current=words[i];

if(!deleting){

j++;

}else{

j--;

}

document.getElementById("typing").textContent=current.substring(0,j);

if(!deleting && j==current.length){

deleting=true;

setTimeout(type,1200);

return;

}

if(deleting && j==0){

deleting=false;

i++;

if(i>=words.length)i=0;

}

setTimeout(type,deleting?40:90);

}

type();
