/*=========================================
        PORTFOLIO 2026
        script.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
        Плавная прокрутка
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    /*==============================
        Липкая шапка
    ==============================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /*==============================
        Кнопка наверх
    ==============================*/

    const toTop = document.getElementById("toTop");

    if (toTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                toTop.classList.add("show");

            } else {

                toTop.classList.remove("show");

            }

        });

        toTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*==============================
        Печатающийся текст
    ==============================*/

    const typing = document.getElementById("typing");

    if (typing) {

        const words = [

            "IT Project Manager",
            "STEM Trainer",
            "Engineer",
            "Project Coordinator"

        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const word = words[wordIndex];

            if (deleting) {

                charIndex--;

            } else {

                charIndex++;

            }

            typing.textContent = word.substring(0, charIndex);

            if (!deleting && charIndex === word.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

            if (deleting && charIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

            setTimeout(typeEffect, deleting ? 45 : 90);

        }

        typeEffect();

    }

    /*==============================
        Меню телефона
    ==============================*/

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("open");

        });

    }

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (nav.classList.contains("open")) {

                nav.classList.remove("open");

            }

        });

    });

    /*==============================
        Анимация появления
    ==============================*/

    const animatedElements = document.querySelectorAll(`
        section,
        .project,
        .skill-card,
        .timeline-item,
        .cert,
        .contact-box,
        .info-box,
        .stat-card
    `);

    animatedElements.forEach(item => {

        item.classList.add("hidden");

    });

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

        });

    }, {

        threshold: 0.15

    });

    animatedElements.forEach(item => {

        revealObserver.observe(item);

    });

    /*==============================
        Premium Counter
    ==============================*/

    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            const suffix = counter.dataset.suffix || "";

            let current = 0;

            const duration = 1800;

            const step = Math.max(1, target / (duration / 16));

            function animateCounter() {

                current += step;

                if (current < target) {

                    counter.textContent =
                        Math.floor(current).toLocaleString("ru-RU") + suffix;

                    requestAnimationFrame(animateCounter);

                } else {

                    counter.textContent =
                        target.toLocaleString("ru-RU") + suffix;

                    counter.classList.add("done");

                }

            }

            animateCounter();

            counterObserver.unobserve(counter);

        });

    }, {

        threshold: 0.45

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    /*==============================
        Активный пункт меню
    ==============================*/

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 180;

            if (window.scrollY >= top) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*==============================
        Прелоадер (если используется)
    ==============================*/

    window.addEventListener("load", () => {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }

    });

    /*==============================
        Параллакс фото (необязательно)
    ==============================*/

    const heroImage = document.querySelector(".hero-image");

    if (heroImage) {

        window.addEventListener("mousemove", (e) => {

            const x = (window.innerWidth / 2 - e.clientX) / 45;
            const y = (window.innerHeight / 2 - e.clientY) / 45;

            heroImage.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }

    /*==============================
        Hover эффект карточек
    ==============================*/

    document.querySelectorAll(
        ".project,.skill-card,.cert,.info-box,.stat-card"
    ).forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transition = ".35s";

        });

    });

    /*==============================
        Конец файла
    ==============================*/

});
