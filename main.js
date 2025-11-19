const scroller = document.querySelector('.slides-wrapper');
const slides =  document.querySelectorAll('.slide-item');

if(!Window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    addAnimation();
}

// function addAnimation(){
//     slides.forEach((slide, index) => {
//         slide.animate([
//             {transform: 'translateX(100%)'},
//             {transform: 'translateX(0)'},
//         ], {
//             duration: 1000,
//             easing: 'ease-in-out',
//         });
//     });
// }
function addAnimation(){
    scroller.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);
    });
}