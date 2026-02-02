
const wrpGroup = document.getElementById('popularTodayWrapper');
const latestReleases = document.getElementById('latestReleasesContainer');
const mostPopular = document.getElementById('mostPopularContainer');


// ----------------------
// SLIDER SECTION
// ----------------------
MANGA_DATA.forEach((manga, index) => {
    const slideItem = document.createElement('div');
    slideItem.classList.add('slide-item');

    // Image
    const img = document.createElement('img');
    img.src = manga.Image;
    img.alt = manga.title;
    img.draggable = false;

    // Status container
    const runingStatus = document.createElement('p');
    runingStatus.textContent = manga.status;

    // Status light
    const statusLight = document.createElement('span');
    statusLight.classList.add('status-light');

    // Set color based on status
    switch (manga.status.toLowerCase()) {
        case 'ongoing':
            statusLight.style.backgroundColor = 'green';
            break;
        case 'completed':
            statusLight.style.backgroundColor = 'blue';
            break;
        case 'axed':
        case 'completed (axed)':   
            statusLight.style.backgroundColor = 'red';
            break;
        case 'hiatus':
        case 'completed (season hiatus)':   
            statusLight.style.backgroundColor = 'orange';
            break;
        default:
            statusLight.style.backgroundColor = 'gray';
    }

    runingStatus.prepend(statusLight); // put the light before the text

    // Title
    const title = document.createElement('h2');
    title.textContent = manga.title;

    // Genre
    const genreDiv = document.createElement('div');
    genreDiv.classList.add('genre-list');
    if (typeof manga.genre === "string") {
        manga.genre.split(",").forEach(g => {
            const span = document.createElement("span");
            span.textContent = g.trim();
            genreDiv.appendChild(span);
        });
    }

    // Append elements
    slideItem.appendChild(img);
    slideItem.appendChild(runingStatus);
    slideItem.appendChild(title);
    slideItem.appendChild(genreDiv);
    slidesWrapper.appendChild(slideItem);
    // Navigate to manga info page when user clicks the slide
    slideItem.style.cursor = 'pointer';
    slideItem.addEventListener('click', () => {
        window.location.href = `pages/manga-info-page.html?id=${encodeURIComponent(index)}`;
    });
});



// ----------------------
// POPULAR TODAY SECTION
// ----------------------
const popularMangas = MANGA_DATA.slice(5, 10);

for (let i = 0; i < 2; i++) {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('popular-today-wrapper');

    if (i === 1) wrapperDiv.setAttribute('aria-hidden', 'true');

    popularMangas.forEach(manga => {
        const item = document.createElement('div');
        item.classList.add('popular-today-item');

        const img = document.createElement('img');
        img.src = manga.Image;
        img.alt = manga.title;

        // compute the original index in MANGA_DATA
        const globalIndex = MANGA_DATA.indexOf(manga);
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const id = globalIndex >= 0 ? globalIndex : '';
            window.location.href = `pages/manga-info-page.html?id=${encodeURIComponent(id)}`;
        });

        const title = document.createElement('h2')
        title.textContent = manga.title;

        const flags = document.createElement('div')
        flags.classList.add('flag-rating');
        const fimg = document.createElement('img')
        fimg.src = manga.flag;
        const ratings = document.createElement('p')
        ratings.textContent = manga.ratings;

        flags.appendChild(fimg);
        flags.appendChild(ratings)

        // Append elements
        item.appendChild(img);
        item.appendChild(title);
        item.appendChild(flags);
        wrapperDiv.appendChild(item);
    });

    wrpGroup.appendChild(wrapperDiv);
}



// ----------------------
// LATEST RELEASES SECTION
// ----------------------
MANGA_DATA.forEach((manga, index) => {

    const latestItem = document.createElement('div');
    latestItem.classList.add('latest-releases-item');

    // Image Card
    const imgCard = document.createElement('div');
    imgCard.classList.add('img-card');

    const img = document.createElement('img');
    img.src = manga.Image;
    img.alt = manga.title;
    img.draggable = false;

    // Country Flag
    const flag = document.createElement('div');
    flag.classList.add('flag');
    const flagImg = document.createElement('img');
    // flagImg.classList.add('flag-img');
    flagImg.src = manga.flag;
    flagImg.alt = 'Country Flag';
    
    imgCard.appendChild(img);
    flag.appendChild(flagImg);
    imgCard.appendChild(flag);

    // Clicking the image card should open the manga info page
    imgCard.style.cursor = 'pointer';
    imgCard.addEventListener('click', () => {
        window.location.href = `pages/manga-info-page.html?id=${encodeURIComponent(index)}`;
    });

    // Manga Info
    const mangaInfo = document.createElement('div');
    mangaInfo.classList.add('manga-data');

    const title = document.createElement('h3');
    title.textContent = manga.title;

    mangaInfo.appendChild(title);

    // Chapters list
    const chapterList = document.createElement('div');
    chapterList.classList.add('chapter-data');

    // create 4 fake chapters
    for (let i = 0; i < 4; i++) {
        const chapter = document.createElement('div');
        chapter.classList.add('chapter');

        const chapterNumber = document.createElement('span');
        const chapterNum = 50 + i;
        chapterNumber.textContent = `Chapter ${chapterNum}`;

        const time = document.createElement('span');
        time.textContent = '2 hours ago';

        chapter.appendChild(chapterNumber);
        chapter.appendChild(time);

        // make chapter clickable — open chapter page with manga id and chapter number
        chapter.style.cursor = 'pointer';
        chapter.addEventListener('click', () => {
            window.location.href = `pages/chapter.html?mangaId=${encodeURIComponent(index)}&chapter=${encodeURIComponent(chapterNum)}`;
        });

        chapterList.appendChild(chapter);
    }

    mangaInfo.appendChild(chapterList);

    // Build card
    latestItem.appendChild(imgCard);
    latestItem.appendChild(mangaInfo);

    latestReleases.appendChild(latestItem);
});

// ----------------------
// MOST POPULAR SECTION
// ----------------------
MANGA_DATA.slice(0, 9).forEach((manga, index) => {

    // Most item card
    const popularItem = document.createElement('div');
    popularItem.classList.add('Most-Popular-item');

    //image 
    const img = document.createElement('img');
    img.src = manga.Image;
    img.alt = manga.title;
    img.draggable = false;

    popularItem.appendChild(img)

    // Ranking number
    const rank = document.createElement('div');
    rank.classList.add("rank");

    const rankNumber = document.createElement('h2');
    rankNumber.textContent = index + 1; // 1, 2, 3......

    rank.appendChild(rankNumber);

    popularItem.appendChild(rank);

    // Title + genre
    const details = document.createElement('div');
    details.classList.add("d-t");

    // Title 
    const titleDiv = document.createElement('div');
    titleDiv.classList.add("titel")

    const title = document.createElement('h3');
    title.textContent = manga.title;

    titleDiv.appendChild(title);

    details.appendChild(titleDiv);

    // Genre list
    const genreDiv = document.createElement('div');
    genreDiv.classList.add("genre");

    // If your MANGA_DATA has genres:
    // genres: ["Action", "Adventure", "Martial Arts"]

    // IMPORTANT: This takes data from your JSON

    // if(Array.isArray(manga.genres)) {
    //     manga.genres.forEach(g => {
    //         const span = document.createElement('span');
    //         span.textContent = g;

    //         genreDiv.appendChild(span)
    //     });
    // };

    if (typeof manga.genre === "string") {
        manga.genre.split(",").forEach(g => {
            const span = document.createElement("span");
            span.textContent = g.trim();
            genreDiv.appendChild(span);
        });
    }


    details.appendChild(genreDiv);

    // Build card
    popularItem.appendChild(details);
    // clicking the card opens the manga info page
    popularItem.style.cursor = 'pointer';
    popularItem.addEventListener('click', () => {
        window.location.href = `pages/manga-info-page.html?id=${encodeURIComponent(index)}`;
    });

    mostPopular.appendChild(popularItem);
});    
