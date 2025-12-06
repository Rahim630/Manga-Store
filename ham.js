const hamburger = document.querySelector('[data-type="hamMenu"]');
const navMenu = document.querySelector('[data-type="Menu"]');
const search = document.querySelector('.search-icon');
const searchOverlay = document.querySelector('[data-type="search-overlay"]');
const searchInput = document.querySelector(".input-text input");
const clearBnt = document.querySelector('.inputs > svg');
const searchBnt = document.querySelector('.svg-1');
const searchCloseBnt = document.querySelector('.svg-2');
const resultsBox = document.querySelector('.search-results')

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

search.addEventListener('click', () => {
     searchOverlay.classList.toggle('active');

     if (searchOverlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
     }
     else {
            document.body.style.overflow = 'auto';
     }
});
searchCloseBnt.addEventListener('click', () => {
     searchOverlay.classList.remove('active');
     document.body.style.overflow = 'auto';
});

clearBnt.addEventListener('click', () => {
     searchInput.value = "";
     searchInput.focus();
});

searchBnt.addEventListener('click', () => {
     const text = searchInput.value.trim();

     if (text === "") {
          alert("Enter something to search!");
          return;
     }
     resultsBox.innerHTML = `<div class ='result-item'>You searched for: <b>${text}</b></div>`
})

searchInput.addEventListener('keydown', (e) => {
     if(e.key === 'Enter') {
          e.preventDefault();
          searchBnt.click();
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

