const hamburger = document.querySelector('[data-type="hamMenu"]');
const navMenu = document.querySelector('[data-type="Menu"]');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

   if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
   }
   else {
        document.body.style.overflow = 'auto';
   }   
});


// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.nav-link2');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active'); 
//     navMenu.classList.toggle('active');

//     if (navMenu.classList.contains('active')) {
//         document.body.style.overflow = 'hidden'; 
//     }
//     else {
//         document.body.style.overflow = 'auto';
//     }
// });



// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.nav-link2');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     navMenu.classList.toggle('active');

//     // Prevent body scrolling when menu is open
//     if(navMenu.classList.contains('active')) {
//         document.body.style.overflow = 'hidden';
//     } else {
//         document.body.style.overflow = 'auto';
//     }
// });

