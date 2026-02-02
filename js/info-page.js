(function(){
    // Parse query params
    const params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    if (id !== null) id = parseInt(id, 10);

    // If item data isn't present on the page, bail gracefully
    if (typeof MANGA_DATA === 'undefined') {
        console.warn('MANGA_DATA not loaded. Make sure ../item.js is included before this script.');
        return;
    }

    const manga = (Number.isInteger(id) && MANGA_DATA[id]) ? MANGA_DATA[id] : MANGA_DATA[0];

    // Elements
    const cover = document.querySelector('.manga-cover');
    const titleEl = document.querySelector('.manga-title');
    const descEl = document.querySelector('.manga-description');
    const tagsEl = document.querySelector('.manga-tags');
    const genresEl = document.querySelector('.genres');
    const readBtn = document.querySelector('.read-btn');
    const chapterBtn = document.querySelector('.chapter-btn');

    if (!manga) return;

    // Populate
    if (cover) {
        // cover might be an <img> element
        if (cover.tagName.toLowerCase() === 'img') cover.src = manga.Image;
        else cover.style.backgroundImage = `url(${manga.Image})`;
    }

    if (titleEl) titleEl.textContent = manga.title || 'Unknown Title';
    if (descEl) descEl.textContent = manga.description || '';

    if (tagsEl) {
        tagsEl.innerHTML = '';
        const status = document.createElement('span');
        status.className = 'status';
        status.textContent = manga.status || '';
        tagsEl.appendChild(status);

        const type = document.createElement('span');
        type.className = 'type';
        type.textContent = manga.released ? `📅 ${manga.released}` : '';
        tagsEl.appendChild(type);

        const author = document.createElement('span');
        author.className = 'author';
        author.textContent = manga.author ? `👤 ${manga.author}` : '';
        tagsEl.appendChild(author);
    }

    if (genresEl) {
        genresEl.innerHTML = '';
        if (manga.genre) {
            const genres = typeof manga.genre === 'string' ? manga.genre.split(',') : manga.genre;
            genres.forEach(g => {
                const s = document.createElement('span');
                s.textContent = g.trim();
                genresEl.appendChild(s);
            });
        }
    }

    // Make Read / New Chapter buttons navigate to the chapter page (first chapter)
    if (readBtn) {
        readBtn.addEventListener('click', () => {
            // default to chapter 1
            const chapter = params.get('chapter') || '1';
            window.location.href = `chapter.html?mangaId=${encodeURIComponent(id ?? 0)}&chapter=${encodeURIComponent(chapter)}`;
        });
    }

    if (chapterBtn) {
        chapterBtn.addEventListener('click', () => {
            // open latest chapter (for demo, use chapter 1)
            const latest = 1;
            window.location.href = `chapter.html?mangaId=${encodeURIComponent(id ?? 0)}&chapter=${encodeURIComponent(latest)}`;
        });
    }
})();
