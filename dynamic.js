// const slidesWrapper = document.querySelector('.slides-wrapper');
const wrpGroup = document.getElementById('popularTodayWrapper');


MANGA_DATA.forEach(manga => {
    // Create the slide container
    const slideItem = document.createElement('div');
    slideItem.classList.add('slide-item');

    // Create the image element
    const img = document.createElement('img');
    img.src = manga.Image;
    img.alt = manga.title;
    img.draggable = false;

    // Append image to the slide
    slideItem.appendChild(img);

    // Append slide to the wrapper
    slidesWrapper.appendChild(slideItem);

});

// Optional: select only a subset of popular mangas
const popularMangas = MANGA_DATA.slice(5, 10);  // Example: pick 5 mangas

// Create two wrappers (like your original HTML)

for(let i = 0; i < 2; i++) {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('popular-today-wrapper');

    if(i === 1) {
        wrapperDiv.setAttribute('aria-hidden', 'true');
    }

    popularMangas.forEach(manga => {
        // Create the slide container
        const popularTodayItem = document.createElement('div');
        popularTodayItem.classList.add('popular-today-item');

        // Create the image element
        const img = document.createElement('img');
        img.src = manga.Image;
        img.alt = manga.title;
        img.draggable = false;

        // Append image to the slide
        popularTodayItem.appendChild(img);

        // Append slide to the wrapper
        wrapperDiv.appendChild(popularTodayItem);
    });
    // Append the wrapper to the main wrpGroup
    wrpGroup.appendChild(wrapperDiv);
}
