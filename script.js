/* =====================================
   PORTFOLIO 2026 PRO SCRIPT
===================================== */



// ================= LANGUAGE SWITCH =================


let currentLang = localStorage.getItem("language") || "ru";


function setLanguage(lang){


currentLang = lang;


localStorage.setItem("language", lang);



document.querySelectorAll("[data-ru]").forEach(element=>{


element.textContent = element.getAttribute(
"data-" + lang
);


});



document.documentElement.lang = lang;



let button = document.getElementById("langBtn");


if(button){

button.textContent = lang === "ru" ? "KZ" : "RU";

}


}




document.addEventListener("DOMContentLoaded",()=>{


setLanguage(currentLang);



const langBtn =
document.getElementById("langBtn");



if(langBtn){


langBtn.addEventListener("click",()=>{


if(currentLang==="ru"){

setLanguage("kz");

}

else{

setLanguage("ru");

}



});


}



});







// ================= EXPERIENCE DETAILS =================



function toggleJob(id){


let block =
document.getElementById(id);



if(block){


if(block.style.display==="block"){


block.style.display="none";


}

else{


block.style.display="block";


}



}


}








// ================= MOBILE MENU =================


const menuButton =
document.querySelector(".menu");

const navigation =
document.querySelector("nav");



if(menuButton){


menuButton.addEventListener("click",()=>{


navigation.classList.toggle("active");


});


}







// Закрытие меню после перехода


document.querySelectorAll("nav a")
.forEach(link=>{


link.addEventListener("click",()=>{


navigation.classList.remove("active");


});


});








// ================= SCROLL ANIMATION =================



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},
{

threshold:0.15

});





document.querySelectorAll(
".project-card, .skill-box, .experience-card, .contact-card, .certificate-card"
)
.forEach(element=>{


observer.observe(element);


});








// ================= HEADER EFFECT =================



window.addEventListener(
"scroll",
()=>{


const header =
document.querySelector("header");



if(window.scrollY>50){


header.classList.add("scrolled");


}

else{


header.classList.remove("scrolled");


}


});
