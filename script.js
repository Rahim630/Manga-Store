const slidesWrapper = document.querySelector('.slides-wrapper');
const slideItems = document.querySelectorAll('.slide-item');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
const arrowBnts = document.querySelectorAll('.slide-container button');
const firstItemWidth = slidesWrapper.querySelector('.slide-item').offsetWidth + 20; //20 is the gap between items
const slidesWrapperChildren = [...slidesWrapper.children];


let isDragging = false, startX, scrollLeft, timeOutId;

const dragStart = (e) => {
    isDragging = true;
    slidesWrapper.classList.add("dragging");
    //Record the initial cursor and scroll position of the slidesWrapper
    startX = e.pageX;
    scrollLeft = slidesWrapper.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    //Update the scroll position of the slidesWrapper based on the cursor movement
    slidesWrapper.scrollLeft = scrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false; 
    slidesWrapper.classList.remove("dragging");
}

const autoPlay = () => {
    if(window.innerWidth < 200) return; //stop autoplay on small screens
    timeOutId = setTimeout(() => slidesWrapper.scrollLeft += firstItemWidth, 2500);
};
autoPlay();

const InfinityScroll = () => {
    //If the slidesWrapper is at the beginning, scroll to the end
    if (slidesWrapper.scrollLeft === 0) {
        slidesWrapper.classList.add("no-transition");
        slidesWrapper.scrollLeft = slidesWrapper.scrollWidth - (2 * slidesWrapper.offsetWidth);
        slidesWrapper.classList.remove("no-transition");
    }
    //If the slidesWrapper is at the end, scroll to the beginning
    else if (Math.ceil(slidesWrapper.scrollLeft) >= slidesWrapper.scrollWidth - slidesWrapper.offsetWidth) {
        slidesWrapper.classList.add("no-transition");
        slidesWrapper.scrollLeft = slidesWrapper.offsetWidth;
        slidesWrapper.classList.remove("no-transition");
    }
    //Clear existing timeout & start autoplay if not dragging
    clearTimeout(timeOutId);
    if(!slidesWrapper.matches(':hover')) autoPlay();
}   

slidesWrapper.addEventListener('mousemove', dragging);
slidesWrapper.addEventListener('mousedown', dragStart);
document.addEventListener('mouseup', dragStop);
slidesWrapper.addEventListener('scroll', InfinityScroll);
slidesWrapper.addEventListener('mouseenter', () => clearTimeout(timeOutId));
slidesWrapper.addEventListener('mouseleave', autoPlay);

arrowBnts.forEach(bnt => {
    bnt.addEventListener('click', () => {
        slidesWrapper.scrollLeft += bnt.id === 'prevBtn' ? -firstItemWidth : firstItemWidth;
    });
});

let slideItemsView = Math.round(slidesWrapper.offsetWidth / firstItemWidth);

slidesWrapperChildren.slice(-slideItemsView).reverse().forEach(item => {
    slidesWrapper.insertAdjacentHTML('afterbegin', item.outerHTML);
});
slidesWrapperChildren.slice(0, slideItemsView).forEach(item => {
    slidesWrapper.insertAdjacentHTML('beforeend', item.outerHTML);
});


// arrowBnts.forEach(btn => {
//     btn.addEventListener('click', () => {
//         if (btn.id === 'prevBtn') {
//             slidesWrapper.scrollLeft -= firstItemWidth;
//         } else {
//             slidesWrapper.scrollLeft += firstItemWidth;
//         }
//     });
// });




// slideItems.forEach(item => {
//     item.addEventListener('mousemove', dragging);
// });