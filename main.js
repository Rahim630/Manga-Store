const slidesWrapper = document.querySelector('.slides-wrapper');
const slideItems = document.querySelectorAll('.slide-item');
const arrowBnts = document.querySelectorAll('.slide-container button');
const firstItemWidth = slidesWrapper.querySelector('.slide-item').offsetWidth + 20; //20 is the gap between items
const slidesWrapperChildren = [...slidesWrapper.children];

let isDragging = false, startX, scrollLeft, timeoutId;

let slideItemsView = Math.round(slidesWrapper.offsetWidth / firstItemWidth);

slidesWrapperChildren.slice(-slideItemsView).reverse().forEach(item => {
    slidesWrapper.insertAdjacentHTML('afterbegin', item.outerHTML);
});
slidesWrapperChildren.slice(0, slideItemsView).forEach(item => {
    slidesWrapper.insertAdjacentHTML('beforeend', item.outerHTML);
});

arrowBnts.forEach(bnt => {
    bnt.addEventListener('click', () => {
        slidesWrapper.scrollLeft += bnt.id === "nextBtn" ? firstItemWidth : -firstItemWidth;
    });
});

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    //Update the scroll position of the slidesWrapper based on the cursor movement
    slidesWrapper.scrollLeft = scrollLeft - (e.pageX - startX);
    console.log('Dragging');
};
const dragStart = (e) => {
    isDragging = true;
    slidesWrapper.classList.add("dragging");
    //Record the initial cursor and scroll position of the slidesWrapper
    startX = e.pageX;
    scrollLeft = slidesWrapper.scrollLeft;
    // console.log('Drag started');
};
const dragStop = () => {
    isDragging = false;
    slidesWrapper.classList.remove("dragging");
    // console.log('Drag stopped');
}
const autoPlay = () => {
    if(window.innerWidth < 200)return;
    timeoutId = setTimeout(() => slidesWrapper.scrollLeft += firstItemWidth, 2000);
}
autoPlay();
const InfinityScroll = () => {
    if(slidesWrapper.scrollLeft === 0) {
        slidesWrapper.classList.add('no-transition');
        slidesWrapper.scrollLeft = slidesWrapper.scrollWidth - (2 * slidesWrapper.offsetWidth);
        slidesWrapper.classList.remove('no-transition');
    }
    else if (Math.ceil(slidesWrapper.scrollLeft) >= slidesWrapper.scrollWidth - slidesWrapper.offsetWidth) {
        slidesWrapper.classList.add('no-transition');
        slidesWrapper.scrollLeft = slidesWrapper.offsetWidth;
        slidesWrapper.classList.remove('no-transition');
    }
    clearTimeout(timeoutId);
    if(!slidesWrapper.matches(':hover'))autoPlay();  
}

slidesWrapper.addEventListener('mousemove', dragging);
slidesWrapper.addEventListener('mousedown', dragStart);
document.addEventListener('mouseup', dragStop);
slidesWrapper.addEventListener('scroll', InfinityScroll);
slidesWrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId))
slidesWrapper.addEventListener('mousleve', autoPlay);
