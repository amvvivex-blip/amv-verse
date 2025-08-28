// Loader script to manage styles and removal
document.addEventListener('DOMContentLoaded', () => {
    // --- Cached DOM Elements ---
    const elements = {
        loaderWrapper: document.querySelector('.loader-wrapper'),
        mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
        mainNav: document.querySelector('.main-nav'),
        carouselItems: document.querySelectorAll('.carousel-item'),
        searchInput: document.getElementById('searchInput'),
        animeGrid: document.getElementById('anime-grid'),
        filterButtons: document.querySelectorAll('.filter-btn'),
        genreFilter: document.getElementById('genre-filter'),
        yearFilter: document.getElementById('year-filter'),
        statusFilter: document.getElementById('status-filter'),
        sortBy: document.getElementById('sort-by'),
        btnFilter: document.querySelector('.btn-filter')
    };

    // --- Loading Animation ---
    if (elements.loaderWrapper) {
        // Use requestAnimationFrame for smoother animation
        const hideLoader = () => {
            requestAnimationFrame(() => {
                elements.loaderWrapper.classList.add('loader-hidden');
            });
        };

        // Check if page is already loaded
        if (document.readyState === 'complete') {
            hideLoader();
        } else {
            window.addEventListener('load', hideLoader, { once: true });
        }
    }

    // --- Mobile Menu Toggle ---
    if (elements.mobileMenuToggle && elements.mainNav) {
        elements.mobileMenuToggle.addEventListener('click', () => {
            elements.mainNav.classList.toggle('active');
        });
    }

    // --- Carousel Logic (Optimized) ---
    if (elements.carouselItems.length > 0) {
        let currentIndex = 1;
        let carouselInterval;

        // Use transform3d for hardware acceleration
        const updateCarousel = () => {
            requestAnimationFrame(() => {
                elements.carouselItems.forEach((item, index) => {
                    let offset = index - currentIndex;
                    if (offset > 1) offset -= 3;
                    if (offset < -1) offset += 3;

                    const isActive = offset === 0;

                    // Use will-change for better performance
                    item.style.willChange = 'transform, opacity';
                    item.style.transform = isActive
                        ? 'translate3d(0, 0, 0) scale(1)'
                        : `translate3d(${offset * 110}%, 0, 0) scale(0.8)`;
                    item.style.opacity = isActive ? '1' : '0.5';
                    item.style.zIndex = isActive ? '4' : '1';

                    // Remove will-change after animation completes
                    setTimeout(() => {
                        item.style.willChange = 'auto';
                    }, 300);
                });
            });
        };

        // Initialize carousel
        updateCarousel();

        // Start interval with proper cleanup
        const startCarousel = () => {
            carouselInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % 3;
                updateCarousel();
            }, 2000);
        };

        startCarousel();

        // Pause carousel on hover for better UX
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', () => {
                clearInterval(carouselInterval);
            });

            carouselContainer.addEventListener('mouseleave', () => {
                startCarousel();
            });
        }
    }

    // --- Search and Filter Functionality (Optimized) ---
    // Create suggestions container
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'search-suggestions';
    if (elements.searchInput) {
        elements.searchInput.parentNode.appendChild(suggestionsContainer);
    }

    // Debounce function to limit search frequency
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // Search by title or genres
    const searchAnime = query => {
        query = query.toLowerCase().trim();
        return animeData.filter(anime =>
            anime.title.toLowerCase().includes(query) ||
            anime.genres.some(genre => genre.toLowerCase().includes(query))
        );
    };

    // Filtering with memoization
    let lastFilterState = {};
    const filterAnime = () => {
        const filterState = {
            genre: elements.genreFilter?.value || 'all',
            year: elements.yearFilter?.value || 'all',
            status: elements.statusFilter?.value || 'all',
            sort: elements.sortBy?.value || 'latest'
        };

        // Return cached result if filters haven't changed
        if (JSON.stringify(filterState) === JSON.stringify(lastFilterState)) {
            return;
        }

        lastFilterState = { ...filterState };

        let filtered = animeData.filter(anime =>
            (filterState.genre === 'all' || anime.genres.includes(filterState.genre)) &&
            (filterState.year === 'all' || String(anime.year) === filterState.year) &&
            (filterState.status === 'all' || anime.status === filterState.status)
        );

        if (filterState.sort === 'a-z') {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (filterState.sort === 'popularity') {
            filtered.sort((a, b) => b.popularity - a.popularity);
        } else if (filterState.sort === 'latest') {
            filtered.sort((a, b) => (b.year || 0) - (a.year || 0));
        }

        return filtered;
    };

    // Render Anime Cards with Document Fragment for performance
    const renderAnimeGrid = animeList => {
        if (!elements.animeGrid) return;

        // Use requestAnimationFrame for smoother rendering
        requestAnimationFrame(() => {
            // Use document fragment to minimize reflows
            const fragment = document.createDocumentFragment();

            animeList.forEach(anime => {
                const card = document.createElement('div');
                card.className = 'anime-card';
                card.innerHTML = `
                    <img src="${anime.img}" alt="${anime.title}" loading="lazy">
                    <h3>${anime.title}</h3>
                    <p>${anime.genres.join(', ')}</p>
                    <small>${anime.year} • ${anime.status}</small>
                `;
                card.addEventListener('click', () => {
                    window.location.href = anime.link
                        ? anime.link
                        : `anime.html?id=${encodeURIComponent(anime.id || anime.title)}`;
                });
                fragment.appendChild(card);
            });

            // Clear and update in one operation
            elements.animeGrid.innerHTML = '';
            elements.animeGrid.appendChild(fragment);
        });
    };

    // Initial render
    renderAnimeGrid(filterAnime() || animeData);

    // Debounced search input handler
    const handleSearchInput = debounce(() => {
        const query = elements.searchInput.value;
        suggestionsContainer.innerHTML = '';

        if (query.length > 1) {
            const results = searchAnime(query);
            suggestionsContainer.style.display = 'block';

            if (results.length) {
                const suggestionFragment = document.createDocumentFragment();

                results.slice(0, 5).forEach(anime => {
                    const suggestion = document.createElement('div');
                    suggestion.className = 'suggestion-item';
                    suggestion.innerHTML = `
                        <img src="${anime.img}" alt="${anime.title}" loading="lazy">
                        <div>
                            <div class=title>${anime.title}</div>
                            <div class=genres>${anime.genres.join(', ')}</div>
                        </div>
                    `;
                    suggestion.addEventListener('click', () => {
                        window.location.href = anime.link
                            ? anime.link
                            : `anime.html?id=${encodeURIComponent(anime.id || anime.title)}`;
                    });
                    suggestionFragment.appendChild(suggestion);
                });

                suggestionsContainer.appendChild(suggestionFragment);
            } else {
                suggestionsContainer.innerHTML = `
                    <div class="suggestion-item no-results">
                        <div class="no-results-content">
                            <i class="fas fa-search"></i>
                            <div>No results found for "${query}"</div>
                            <small>Try different keywords or check your spelling</small>
                        </div>
                    </div>`;
            }
        } else {
            suggestionsContainer.style.display = 'none';
            renderAnimeGrid(filterAnime() || animeData);
        }
    }, 150); // 150ms debounce time

    // Add event listener with debounce
    if (elements.searchInput) {
        elements.searchInput.addEventListener('input', handleSearchInput);
    }

    // Filter button
    if (elements.btnFilter) {
        elements.btnFilter.addEventListener('click', () => {
            renderAnimeGrid(filterAnime() || animeData);
        });
    }

    // Hide suggestions on outside click
    const handleDocumentClick = (e) => {
        if (elements.searchInput && !elements.searchInput.parentNode.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
        }
    };

    document.addEventListener('click', handleDocumentClick);

    // --- Smooth Scrolling ---
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });

    // --- Filter Buttons ---
    if (elements.filterButtons.length) {
        let activeFilter = { type: 'type', value: 'all' };
        document.querySelector('.filter-btn[data-value="all"]')?.classList.add('active');

        elements.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                elements.filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                activeFilter = {
                    type: button.dataset.filter,
                    value: button.dataset.value
                };

                // Use requestAnimationFrame for smoother updates
                requestAnimationFrame(() => {
                    document.querySelectorAll('.anime-card').forEach(card => {
                        card.style.display = (activeFilter.value === 'all' || card.dataset[activeFilter.type] === activeFilter.value)
                            ? 'block' : 'none';
                    });
                });
            });
        });
    }

    // --- Cleanup event listeners on page unload ---
    window.addEventListener('beforeunload', () => {
        // Clear any intervals
        if (carouselInterval) clearInterval(carouselInterval);

        // Remove event listeners
        document.removeEventListener('click', handleDocumentClick);
    });
});

// YouTube Modal functionality
const trailerButton = document.getElementById('trailerButton');
if (trailerButton) {
    trailerButton.addEventListener('click', function () {
        const youtubeId = this.getAttribute('data-youtube-id');
        const modal = document.getElementById('youtubeModal');

        // Insert YouTube iframe
        document.getElementById('youtubePlayer').innerHTML = `
            <iframe width="100%" height="100%" 
              src="https://www.youtube.com/embed/${youtubeId}?autoplay=1" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              style="position:absolute; top:0; left:0;">
            </iframe>
        `;

        // Show modal
        modal.style.display = 'flex';
    });
}

// Close modal when clicking X
const closeModalBtn = document.querySelector('.close-modal');
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function () {
        const modal = document.getElementById('youtubeModal');
        modal.style.display = 'none';
        // Clear the iframe to stop video playback
        document.getElementById('youtubePlayer').innerHTML = '';
    });
}

// Close modal when clicking outside the video
const youtubeModal = document.getElementById('youtubeModal');
if (youtubeModal) {
    youtubeModal.addEventListener('click', function (e) {
        if (e.target === this) {
            this.style.display = 'none';
            // Clear the iframe to stop video playback
            document.getElementById('youtubePlayer').innerHTML = '';
        }
    });
}

// Mobile search functionality
const searchButton = document.getElementById('searchButton');
if (searchButton) {
    searchButton.addEventListener('click', function () {
        const searchSuggestions = document.getElementById('searchSuggestions');

        // Toggle the display of the search suggestions
        if (searchSuggestions.style.display === 'none' || searchSuggestions.style.display === '') {
            searchSuggestions.style.display = 'block';
        } else {
            searchSuggestions.style.display = 'none';
        }
    });
}

// Hide suggestions when clicking outside (mobile)
document.addEventListener('click', function (event) {
    const searchBox = document.getElementById('searchBox');
    const searchSuggestions = document.getElementById('searchSuggestions');

    if (searchBox && searchSuggestions && !searchBox.contains(event.target)) {
        searchSuggestions.style.display = 'none';
    }
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize variables
    const loadMoreBtn = document.getElementById('load-more-btn');
    const animeGrid = document.querySelector('.anime-grid');
    const animeCards = document.querySelectorAll('.anime-card');
    const noMoreContent = document.getElementById('no-more-content');

    // Set the number of cards to load per click
    const cardsPerLoad = 15;

    // Calculate total number of pages
    const totalCards = animeCards.length;
    const totalPages = Math.ceil(totalCards / cardsPerLoad);

    // Track current page
    let currentPage = 1;

    // Function to show more cards
    function showMoreCards() {
        // Show loading state
        loadMoreBtn.classList.add('loading');

        // Simulate loading delay (for demonstration purposes)
        setTimeout(() => {
            // Calculate which cards to show
            const startIndex = currentPage * cardsPerLoad;
            const endIndex = Math.min(startIndex + cardsPerLoad, totalCards);

            // Show the next set of cards
            for (let i = startIndex; i < endIndex; i++) {
                if (animeCards[i]) {
                    animeCards[i].style.display = 'block';
                }
            }

            // Update current page
            currentPage++;

            // Hide button if all cards are shown
            if (currentPage >= totalPages) {
                loadMoreBtn.style.display = 'none';
                noMoreContent.style.display = 'block';
            }

            // Remove loading state
            loadMoreBtn.classList.remove('loading');
        }, 500); // Simulate 0.5s loading time
    }

    // Add click event to load more button
    loadMoreBtn.addEventListener('click', showMoreCards);

    // Hide all cards beyond the first 15 initially
    for (let i = cardsPerLoad; i < totalCards; i++) {
        if (animeCards[i]) {
            animeCards[i].style.display = 'none';
        }
    }

    // Hide button if there are no more cards to load initially
    if (totalCards <= cardsPerLoad) {
        loadMoreBtn.style.display = 'none';
        noMoreContent.style.display = 'block';
    }
});

