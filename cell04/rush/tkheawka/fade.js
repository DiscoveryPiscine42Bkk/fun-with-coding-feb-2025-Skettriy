// document.addEventListener("DOMContentLoaded", function () {
//     const fadeElements = document.querySelectorAll(".fade-in");

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("show");
//                 observer.unobserve(entry.target); // Stop observing once shown
//             }
//         });
//     }, { threshold: 0.4 }); // 20% of the element must be visible

//     fadeElements.forEach(el => observer.observe(el));
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const slideElements = document.querySelectorAll(".slide-left, .slide-right");

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("show");
//                 observer.unobserve(entry.target); // Stop observing after animation
//             }
//         });
//     }, { threshold: 0.2 }); // 20% visibility triggers effect

//     slideElements.forEach(el => observer.observe(el));
// });
