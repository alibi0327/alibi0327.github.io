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


// ------------------------------
// Кейсы проектов
// ------------------------------
const projectCases = {
  1:{title:'Презентация проектов на уровне государственных органов',text:'Подготовка и защита крупных образовательных и технологических инициатив для государственных заказчиков и руководителей.',items:[['Роль','Подготовка проекта и презентация решения'],['Фокус','Ценность, техническая концепция и реализация'],['Коммуникации','Государственные заказчики и руководители'],['Результат','Понятное представление сложного проекта для принятия решения']]},
  2:{title:'Оснащение 24 «Комфортных школ»',text:'Комплексное сопровождение проекта оснащения современных образовательных учреждений.',items:[['Масштаб','24 школы'],['Контур','Мебель, IT, интерактивное оборудование, STEM'],['Управление','Поставки, подрядчики, сроки и внедрение'],['Результат','Комплексное оснащение объектов']]},
  3:{title:'Оснащение учебных кабинетов',text:'Проектирование и внедрение компьютерных классов, серверного и мультимедийного оборудования.',items:[['Масштаб','100+ кабинетов'],['Этапы','Подбор → поставка → монтаж → настройка'],['Фокус','Работоспособность инфраструктуры'],['Результат','Готовые к эксплуатации учебные пространства']]},
  4:{title:'Внедрение STEM-лабораторий',text:'Оснащение и запуск образовательных пространств для робототехники, программирования и инженерных дисциплин.',items:[['Направления','Robotics, Arduino, STEM'],['Формат','Оборудование + внедрение'],['Пользователи','Преподаватели и учащиеся'],['Результат','Запущенная образовательная среда']]},
  5:{title:'Консалтинг образовательных организаций',text:'От задачи заказчика до технического решения и сопровождения закупки.',items:[['Фокус','Технические решения'],['Работа','Подбор оборудования и консультации'],['Сегмент','Образовательные организации / B2G'],['Результат','Обоснованное и реализуемое решение']]},
  6:{title:'Инженерные проекты',text:'Техническое сопровождение внедрения оборудования на объекте.',items:[['Этапы','Монтаж, настройка, пусконаладка'],['Контроль','Качество и готовность системы'],['Команда','Инженеры и монтажные специалисты'],['Результат','Сдача работоспособного решения заказчику']]}
};
const modal=document.getElementById('projectModal');
if(modal){
  document.querySelectorAll('.project-more').forEach(btn=>btn.addEventListener('click',()=>{
    const data=projectCases[btn.dataset.project]; if(!data) return;
    document.getElementById('modalTitle').textContent=data.title;
    document.getElementById('modalText').textContent=data.text;
    document.getElementById('modalGrid').innerHTML=data.items.map(([k,v])=>`<div><b>${k}</b><span>${v}</span></div>`).join('');
    modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
  }));
  modal.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open')){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}});
}

// Закрываем мобильное меню после выбора раздела
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
