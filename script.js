// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    // --- HERO ANIMATIONS ---
    const tl = gsap.timeline();

    tl.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
    })
        .from(".hero-line", {
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.2, // Slide each line separately
            ease: "power4.out"
        }, "-=0.6")
        .from(".hero-desc", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4")
        .from(".hero .main-btn", {
            scale: 0.8,
            autoAlpha: 0, // Handles opacity + visibility
            duration: 0.5,
            ease: "back.out(1.7)",
            clearProps: "all" // Clears inline styles after animation to prevent conflicts
        }, "-=0.3");

    // --- BANNER REVEAL ---
    gsap.from(".banner-content", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".banner-section",
            start: "top 95%",
            toggleActions: "play none none reverse"
        }
    });

    // --- PARALLAX HERO BG ---
    gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // --- NAVBAR SLIDE (ON LOAD ONLY) ---
    gsap.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
    });

    // --- ABOUT SECTION REVEAL ---
    // Using autoAlpha for better visibility handling
    gsap.from(".about-text > *", {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".about-text",
            start: "top 95%", // Trigger almost immediately when in view
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".img-box", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".about-visuals",
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    });

    // --- COUNTER ANIMATION ---
    // Simple counter implementation hooked to ScrollTrigger
    gsap.utils.toArray(".stat-number").forEach(stat => {
        const target = +stat.getAttribute("data-target");

        ScrollTrigger.create({
            trigger: stat,
            start: "top 95%",
            toggleActions: "restart none none none", // Restarts every time it enters
            onEnter: () => {
                let obj = { val: 0 };
                gsap.to(obj, {
                    val: target,
                    duration: 2,
                    ease: "power2.out",
                    onUpdate: () => {
                        stat.innerText = Math.floor(obj.val) + (target > 1000 ? "+" : "");
                    }
                });
            }
        });
    });

    // --- PROGRAMS CARDS ---
    gsap.from(".program-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
            trigger: ".programs-grid",
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    });

    // --- GLOBAL TEXT REVEAL (Any section desc/title) ---
    const revealElements = gsap.utils.toArray(".section-title, .section-desc, .section-label");
    revealElements.forEach(elem => {
        gsap.from(elem, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 95%",
                toggleActions: "play none none reverse"
            }
        });
        // --- FORM SUBMISSION TO WHATSAPP ---
        const enquiryForm = document.getElementById("enquiryForm");
        if (enquiryForm) {
            enquiryForm.addEventListener("submit", (e) => {
                e.preventDefault();

                const name = document.getElementById("userName").value;
                const age = document.getElementById("userAge").value;
                const enquiryFor = document.getElementById("enquiryFor").value || "Not Specified";
                const goal = document.getElementById("userGoal").value || "General Enquiry";

                // Format the message
                // Uses %0a for new lines
                const message = `*New Gym Enquiry* 🏋️‍♂️%0a%0a*Name:* ${name}%0a*Age:* ${age}%0a*Enquiring For:* ${enquiryFor}%0a*Topic:* ${goal}%0a%0aPlease send me more details.`;

                const phoneNumber = "919278378772";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

                // Redirect
                window.open(whatsappUrl, '_blank');
            });
        }

    });

});
