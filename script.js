// Theme Toggle Function (Moon <-> Sun)
function myFunction() {
    document.body.classList.toggle("dark-mode");

    const icon = document.getElementById("modeIcon");
    if (!icon) return;

    if (document.body.classList.contains("dark-mode")) {
        // Change Moon → Sun Icon
        icon.innerHTML = `
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8
            M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5
            0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1
            0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5
            0 0 1 0-1h2A.5.5 0 0 1 16 8M3 8a.5.5 0 0 1-.5.5h-2a.5.5
            0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0
            .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5
            0 0 1 .707 0"/>
        `;
    } else {
        // Change Sun → Moon Icon
        icon.innerHTML = `
            <path d="M6 .278a.77.77 0 0 1 .08.858
            7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277
            7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1
            .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1
            8.344 16C3.734 16 0 12.286 0 7.71
            0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>

            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387
            1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217
            0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097
            l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73
            1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1
            0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097z"/>
        `;
    }
}

// Initialize libraries once DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // AOS Animation Init
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            once: true,
            disableMutationObserver: false,
        });
    }

    // Typed.js Animation Init
    if (typeof Typed !== "undefined") {
        var typed = new Typed(".text", {
            strings: [" Developer", "Youtuber", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        });
    }
});
const techOrbit = document.getElementById("techOrbit");

if (techOrbit) {

    const logos = techOrbit.querySelectorAll(".tech-logo");

    let angle = 0;

    // Rotation speed
    const speed = 0.0025;

    function animateOrbit() {

        angle += speed;

        const rect = techOrbit.getBoundingClientRect();

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        /*
         * Responsive orbit radius
         *
         * Desktop  = 205px
         * Tablet   = smaller
         * Mobile   = smaller
         */
        let radius;

        if (window.innerWidth <= 330) {
            radius = 135;
        } 
        else if (window.innerWidth <= 360) {
            radius = 145;
        } 
        else if (window.innerWidth <= 480) {
            radius = 160;
        } 
        else if (window.innerWidth <= 768) {
            radius = 175;
        } 
        else if (window.innerWidth <= 1100) {
            radius = 190;
        } 
        else {
            radius = 205;
        }

        logos.forEach((logo, index) => {

            // Evenly distribute logos
            const logoAngle =
                angle +
                (index / logos.length) * Math.PI * 2;

            const x =
                centerX +
                Math.cos(logoAngle) * radius;

            const y =
                centerY +
                Math.sin(logoAngle) * radius;

            /*
             * Fake 3D depth
             */
            const depth =
                (Math.sin(logoAngle) + 1) / 2;

            const scale =
                0.75 + depth * 0.35;

            const zIndex =
                Math.round(depth * 100);

            logo.style.left =
                `${x - logo.offsetWidth / 2}px`;

            logo.style.top =
                `${y - logo.offsetHeight / 2}px`;

            logo.style.transform =
                `scale(${scale})`;

            logo.style.zIndex =
                zIndex;

            logo.style.opacity =
                0.65 + depth * 0.35;
        });

        requestAnimationFrame(animateOrbit);
    }

    animateOrbit();

}