
/* ==========================================================
   ThreatShield AI Legal Center
   Premium JavaScript
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------
    // Smooth Navigation Active State
    // ------------------------------

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    function activateMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    activateMenu();

    window.addEventListener("scroll", activateMenu);

    // ------------------------------
    // Fade Animation
    // ------------------------------

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".legal-card,.highlight-card,.hero")
        .forEach(el => observer.observe(el));

    // ------------------------------
    // Back To Top Button
    // ------------------------------

    const button = document.createElement("button");

    button.innerHTML = "↑";

    button.id = "backToTop";

    document.body.appendChild(button);

    button.onclick = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.style.opacity = "1";
            button.style.visibility = "visible";

        } else {

            button.style.opacity = "0";
            button.style.visibility = "hidden";

        }

    });

});
