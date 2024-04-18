// Ensure that strict mode is enabled at the beginning of the script
"use strict";

// Wait for the document to be ready
$(document).ready(function() {
    // Initialize AOS
    AOS.init({
        duration: 1200, // Animation duration
        once: true, // Only animate elements once
    });

    // Register the GSAP plugin
    gsap.registerPlugin(ScrollTrigger);

    // Query all H1 elements and convert NodeList to Array
    const textTitles = Array.from(document.querySelectorAll(".fade-item"));

    // Create a timeline for GSAP animations with ScrollTrigger
    gsap.timeline({
        scrollTrigger: {
            trigger: ".phone", // The element that triggers the start and end of the animation
            start: "center center", // Start the animation when the center of ".phone" hits the center of the viewport
            end: "center 100%", // End the animation when the center of ".phone" hits 60% from the top of the viewport
            endTrigger: ".text__last", // The element that defines the endpoint of the scrollTrigger
            pin: true, // Pin the ".phone" element when the scrollTrigger starts
            pinSpacing: true // Add spacing for the pinned element
        }
    });

    // Animate each title with a separate ScrollTrigger
    textTitles.forEach((title, i) => {
        gsap.to(title, {
            opacity: 1, // Animate to full opacity
            scrollTrigger: {
                trigger: title, // The current title is the trigger for the animation
                start: "top 65%", // Start the animation when the top of the title hits 55% from the top of the viewport
                end: "top 10%", // End the animation when the top of the title hits 10% from the top of the viewport
                scrub: true, // Smooth scrubbing effect for the animation
                toggleClass: {
                    targets: ".phone", // The element to apply the class to
                    className: `phone${i}` // The class to toggle, corrected the index to just 'i'
                }
            }
        });
    });
});
