// ========================================
// GAURAV KHADKA PORTFOLIO
// Interactive Experience
// ========================================


// ===============================
// SCROLL REVEAL
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});


// ===============================
// HERO MOUSE MOVEMENT
// ===============================

const heroCard = document.querySelector(".hero-card");

document.addEventListener("mousemove", (event) => {

    if (!heroCard || window.innerWidth < 800) {
        return;
    }

    const x =
        (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 10;

    heroCard.style.transform =
        `translate(${x}px, ${y}px) rotate(6deg)`;

});


// ===============================
// SKILL CARD INTERACTION
// ===============================

const skillCards =
    document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0)";

    });

});


// ===============================
// PAGE TITLE
// ===============================

document.addEventListener(
    "visibilitychange",
    () => {

        if (document.hidden) {

            document.title =
                "Come back — Gaurav";

        } else {

            document.title =
                "Gaurav Khadka | AI & Data Science";

        }

    }
);