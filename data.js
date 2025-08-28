// ============================================================================
// CONTENT DATA SECTION
// ============================================================================
//
// FILE: data.js
// PURPOSE: Centralized content management and data structure definitions
// =============================================================================
const animeData = [
    {
        id: "maha-narsimha",
        title: "Maha Narsimha",
        type: "movie",
        genres: ["action", "fantasy", "mythology", "divine", "supernatural"],
        director: "S.S. Rajamouli",
        cast: ["Prabhas", "Deepika Padukone"],
        budget: "200M",
        language: "Hindi",
        status: "complete",
        year: 2025,
        rating: 4.5,
        network: "Zetrix",
        duration: 180,
        popularity: 0,
        link: "23-Mahavatar-Narsimha.html",
        img: "https://upload.wikimedia.org/wikipedia/hi/thumb/4/45/Mahavatar_Narsimha_film_poster.jpg/960px-Mahavatar_Narsimha_film_poster.jpg"
    },
    {
        id: "lord-of-the-mysteries",
        title: "Lord of the Mysteries",
        type: "anime",
        genres: ["action", "adventure", "fantasy", "mystery", "supernatural", "horror"],
        director: "N/A",
        cast: ["Klein Moretti", "Amon"],
        budget: "N/A",
        language: "Chinese",
        status: "ongoing",
        year: 2025,
        rating: "N/A",
        network: "Tencent",
        duration: 20,
        popularity: 95,
        link: "4-lord-of-the-mysteries.html",
        img: "https://m.media-amazon.com/images/M/MV5BMWE1ZWYwZGUtZjRmOS00NzUzLTlkZmUtMTEwMjNhNTVmNDIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "soul-land-2",
        title: "Soul Land 2",
        type: "donghua",
        genres: ["action", "adventure", "fantasy", "martial-arts", "supernatural"],
        director: "Shen Le",
        cast: ["Tang Wulin", "Gu Yuena"],
        budget: "N/A",
        language: "Chinese",
        status: "complete",
        year: 2023,
        rating: 4.7,
        network: "Tencent",
        duration: 20,
        popularity: 90,
        link: "2-soul-land-2.html",
        img: "https://i.pinimg.com/736x/d0/8d/6e/d08d6e955d08daf2fa944bc4e9aeb0be.jpg"
    },
    {
        id: "battle-through-the-heavens",
        title: "Battle Through the Heavens",
        type: "donghua",
        genres: ["action", "adventure", "fantasy", "martial-arts", "romance"],
        director: "Zhao Jie",
        cast: ["Xiao Yan", "Xun'er", "Medusa"],
        budget: "N/A",
        language: "Chinese",
        status: "ongoing",
        year: 2017,
        rating: 4.8,
        network: "Tencent",
        duration: 20,
        popularity: 98,
        link: "2-btth.html",
        img: "https://i.pinimg.com/736x/0f/71/5d/0f715d7b3f25e35e5098aeecbf625219.jpg"
    },
    {
        id: "eclipse-of-illusion",
        title: "Eclipse of Illusion",
        type: "donghua",
        genres: ["action", "drama", "fantasy", "mystery", "supernatural"],
        director: "N/A",
        cast: ["Main Character 1", "Main Character 2", "Villain"],
        budget: "N/A",
        language: "Chinese",
        status: "ongoing",
        year: 2025,
        rating: 4.6,
        network: "N/A",
        duration: 20,
        popularity: 85,
        link: "3-eclipse-of-illusion.html",
        img: "https://h-donghua.xyz/wp-content/uploads/2025/07/p2921844108.webp"
    },
    {
        id: "dragon-prince-yuan",
        title: "Dragon Prince Yuan",
        type: "donghua",
        genres: ["action", "adventure", "fantasy", "martial-arts", "romance"],
        director: "N/A",
        cast: ["Zhou Yuan", "Yaoyao", "Wu Huang"],
        budget: "N/A",
        language: "Chinese",
        status: "completed",
        year: 2025,
        rating: 4.7,
        network: "Tencent",
        duration: 20,
        popularity: 92,
        link: "5-dragon-prince-yuan.html",
        img: "https://i.pinimg.com/736x/b1/96/75/b196759acf690dc4be63deaa28ab47b2.jpg"
    },

    {
        id: "fantastic-four-2025",
        title: "Fantastic Four",
        type: "movie",
        genres: ["action", "adventure", "sci-fi", "superhero"],
        director: "Matt Shakman",
        cast: ["Pedro Pascal", "Vanessa Kirby", "Joseph Quinn", "Ebon Moss-Bachrach"],
        budget: "200M",
        language: "Hindi",
        status: "upcoming",
        year: 2025,
        rating: 4.3,
        network: "Marvel",
        duration: 135,
        popularity: 0,
        link: "22-fantastic-4.html",
        img: "https://m.media-amazon.com/images/M/MV5BMTk0Mzc4ODg0Nl5BMl5BanBnXkFtZTgwNzg5MjMxMDE@._V1_FMjpg_UX1000_.jpg"
    },

    {
        id: "doctor-strange-multiverse-of-madness",
        title: "Doctor Strange in the Multiverse of Madness",
        type: "movie",
        genres: ["action", "adventure", "fantasy", "superhero"],
        director: "Sam Raimi",
        cast: ["Benedict Cumberbatch", "Elizabeth Olsen", "Xochitl Gomez", "Rachel McAdams"],
        budget: "200M",
        language: "Hindi",
        status: "complete",
        year: 2022,
        rating: 4.6,
        network: "Marvel",
        duration: 126,
        popularity: 92,
        link: "21-doctor-strange-in-the-multiverse-of-madness.html",
        img: "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDQzNDZhXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg"
    },

    {
        id: "spiderman-far-from-home-2019",
        title: "Spider-Man: Far From Home",
        type: "movie",
        genres: ["action", "adventure", "sci-fi", "superhero"],
        director: "Jon Watts",
        cast: ["Tom Holland", "Zendaya", "Jake Gyllenhaal", "Samuel L. Jackson"],
        budget: "160M",
        language: "Hindi",
        status: "released",
        year: 2019,
        rating: 7.4,
        network: "Marvel",
        duration: 129,
        popularity: 85,
        link: "24-spiderman-far-from-home.html",
        img: "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
    },

    {
        id: "blade-2025",
        title: "Blade",
        type: "movie",
        genres: ["action", "horror", "superhero", "vampire"],
        director: "Yann Demange",
        cast: ["Mahershala Ali", "Mia Goth", "Delroy Lindo", "Aaron Pierre"],
        budget: "200M",
        language: "Hindi",
        status: "upcoming",
        year: 2025,
        rating: 4.2,
        network: "Marvel",
        duration: 125,
        popularity: 0,
        link: "20-blade.html",
        img: "https://m.media-amazon.com/images/M/MV5BOWVjZTM2MzAtZmQwYy00OGY2LWEtN2MtZTVjY2M0NjJkZGRkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg"
    },

    {
        id: "kraven-the-hunter-2024",
        title: "Kraven the Hunter",
        type: "movie",
        genres: ["action", "adventure", "crime", "superhero"],
        director: "J.C. Chandor",
        cast: ["Aaron Taylor-Johnson", "Ariana DeBose", "Russell Crowe", "Fred Hechinger"],
        budget: "130M",
        language: "Hindi",
        status: "released",
        year: 2024,
        rating: 3.2,
        network: "Sony",
        duration: 104,
        popularity: 78,
        link: "25-kraven-the-hunter.html",
        img: "https://m.media-amazon.com/images/M/MV5BYzZiODMzM2ItYTM9Ni00YWQwLWJlNDYtM2JhNThlY2Y3ZGIxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg"
    },

    {
        id: "thunderbolt",
        title: "Thunderbolt",
        type: "movie",
        genres: ["action", "thriller", "sci-fi", "adventure"],
        director: "Rohit Shetty",
        cast: ["Akshay Kumar", "Katrina Kaif", "Ronit Roy"],
        budget: "180M",
        language: "Hindi",
        status: "complete",
        year: 2025,
        rating: 4.3,
        network: "Reliance Entertainment",
        duration: 150,
        popularity: 0,
        link: "26-thunderbolt.html",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Thunderbolt_movie_poster.jpg/960px-Thunderbolt_movie_poster.jpg"
    },

    {
        id: "spiderman-nowayhome",
        title: "Spider-Man: No Way Home",
        type: "movie",
        genres: ["action", "adventure", "sci-fi", "superhero"],
        director: "Jon Watts",
        cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jacob Batalon"],
        budget: "200M",
        language: "Hindi",
        status: "complete",
        year: 2021,
        rating: 4.8,
        network: "Sony",
        duration: 148,
        popularity: 95,
        link: "27-spiderman-nowayhome.html",
        img: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg"
    },


    {
        id: "the-kings-avatar",
        title: "The King's Avatar",
        type: "series",
        genres: ["action", "adventure", "game", "esports"],
        year: 2017,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "the-untamed",
        title: "The Untamed",
        type: "series",
        genres: ["action", "fantasy", "historical", "romance"],
        year: 2019,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "heaven-official-blessing",
        title: "Heaven Official's Blessing",
        type: "series",
        genres: ["action", "fantasy", "historical", "romance"],
        year: 2020,
        rating: 4.8,
        status: "ongoing"
    },
    {
        id: "grandmaster-demonic-cultivation",
        title: "Grandmaster of Demonic Cultivation",
        type: "series",
        genres: ["action", "fantasy", "historical", "supernatural"],
        year: 2018,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "island-siliang",
        title: "The Island of Siliang",
        type: "series",
        genres: ["fantasy", "historical", "romance"],
        year: 2022,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "record-mortals-journey",
        title: "A Record of a Mortal's Journey to Immortality",
        type: "series",
        genres: ["action", "adventure", "fantasy", "cultivation"],
        year: 2020,
        rating: 4.6,
        status: "ongoing"
    },
    {
        id: "legend-sword-domain",
        title: "The Legend of Sword Domain",
        type: "series",
        genres: ["action", "adventure", "fantasy", "martial-arts"],
        year: 2021,
        rating: 4.4,
        status: "ongoing"
    },
    {
        id: "stellar-transformations",
        title: "Stellar Transformations",
        type: "series",
        genres: ["action", "adventure", "fantasy", "cultivation"],
        year: 2018,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "swallowed-star",
        title: "Swallowed Star",
        type: "series",
        genres: ["action", "sci-fi", "adventure", "superpower"],
        year: 2020,
        rating: 4.6,
        status: "ongoing"
    },
    {
        id: "perfect-world",
        title: "Perfect World",
        type: "series",
        genres: ["action", "adventure", "fantasy", "cultivation"],
        year: 2021,
        rating: 4.7,
        status: "ongoing"
    },
    {
        id: "throne-of-seal",
        title: "Throne of Seal",
        type: "series",
        genres: ["action", "adventure", "fantasy", "cultivation"],
        year: 2022,
        rating: 4.5,
        status: "ongoing"
    },
    {
        id: "martial-universe",
        title: "Martial Universe",
        type: "series",
        genres: ["action", "adventure", "fantasy", "martial-arts"],
        year: 2019,
        rating: 4.6,
        status: "complete"
    },
    {
        id: "degenerate-drawing-jianghu",
        title: "The Degenerate Drawing Jianghu",
        type: "series",
        genres: ["comedy", "action", "martial-arts", "historical"],
        year: 2015,
        rating: 4.4,
        status: "ongoing"
    },
    {
        id: "spirit-cage",
        title: "Spirit Cage",
        type: "series",
        genres: ["action", "sci-fi", "horror", "post-apocalyptic"],
        year: 2019,
        rating: 4.5,
        status: "ongoing"
    },
    {
        id: "the-outcast",
        title: "The Outcast",
        type: "series",
        genres: ["action", "supernatural", "fantasy", "comedy"],
        year: 2016,
        rating: 4.3,
        status: "complete"
    },
    {
        id: "legend-of-qin",
        title: "The Legend of Qin",
        type: "series",
        genres: ["action", "historical", "fantasy", "martial-arts"],
        year: 2007,
        rating: 4.6,
        status: "complete"
    },
    {
        id: "cinderella-chef",
        title: "Cinderella Chef",
        title: "Cinderella Chef",
        type: "series",
        genres: ["comedy", "romance", "historical", "food"],
        year: 2018,
        rating: 4.4,
        status: "complete"
    },
    {
        id: "fox-spirit-matchmaker",
        title: "Fox Spirit Matchmaker",
        type: "series",
        genres: ["romance", "fantasy", "comedy", "supernatural"],
        year: 2015,
        rating: 4.5,
        status: "ongoing"
    },
    {
        id: "scumbag-system",
        title: "Scumbag System",
        type: "series",
        genres: ["comedy", "fantasy", "isekai", "adventure"],
        year: 2020,
        rating: 4.5,
        status: "ongoing"
    },
    {
        id: "no-doubt-in-us",
        title: "No Doubt In Us",
        type: "series",
        genres: ["romance", "comedy", "historical", "fantasy"],
        year: 2021,
        rating: 4.6,
        status: "complete"
    },
    {
        id: "psychic-princess",
        title: "Psychic Princess",
        type: "series",
        genres: ["romance", "fantasy", "comedy", "historical"],
        year: 2018,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "daily-life-immortal-king",
        title: "The Daily Life of the Immortal King",
        type: "series",
        genres: ["comedy", "fantasy", "school", "supernatural"],
        year: 2020,
        rating: 4.6,
        status: "ongoing"
    },
    {
        id: "white-snake",
        title: "White Snake",
        type: "movie",
        genres: ["romance", "fantasy", "adventure", "supernatural"],
        year: 2019,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "ne-zha",
        title: "Ne Zha",
        type: "movie",
        genres: ["action", "fantasy", "adventure", "mythology"],
        year: 2019,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "big-fish-begonia",
        title: "Big Fish & Begonia",
        type: "movie",
        genres: ["fantasy", "adventure", "romance", "drama"],
        year: 2016,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "jiang-ziya",
        title: "Jiang Ziya",
        type: "movie",
        genres: ["action", "fantasy", "adventure", "mythology"],
        year: 2020,
        rating: 4.6,
        status: "complete"
    },
    {
        id: "monk-awakening",
        title: "A Monk's Awakening",
        type: "movie",
        genres: ["drama", "spiritual", "historical"],
        year: 2021,
        rating: 4.3,
        status: "complete"
    },
    {
        id: "the-westward",
        title: "The Westward",
        type: "series",
        genres: ["adventure", "historical", "drama"],
        year: 2022,
        rating: 4.4,
        status: "ongoing"
    },
    {
        id: "solo-leveling",
        title: "Solo Leveling",
        type: "series",
        genres: ["action", "adventure", "fantasy", "game"],
        year: 2024,
        rating: 4.9,
        status: "ongoing"
    },
    {
        id: "delicious-dungeon",
        title: "Delicious in Dungeon",
        type: "series",
        genres: ["comedy", "fantasy", "adventure", "food"],
        year: 2024,
        rating: 4.7,
        status: "ongoing"
    },
    {
        id: "metallic-rouge",
        title: "Metallic Rouge",
        type: "series",
        genres: ["sci-fi", "action", "cyberpunk", "adventure"],
        year: 2024,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "classroom-elite-3",
        title: "Classroom of the Elite Season 3",
        type: "series",
        genres: ["psychological", "drama", "school"],
        year: 2024,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "dangers-my-heart-2",
        title: "The Dangers in My Heart Season 2",
        type: "series",
        genres: ["romance", "comedy", "school", "slice-of-life"],
        year: 2024,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "blue-lock",
        title: "Blue Lock",
        type: "series",
        genres: ["sports", "action", "psychological", "shounen"],
        year: 2022,
        rating: 4.8,
        status: "ongoing"
    },
    {
        id: "kingdom-5",
        title: "Kingdom Season 5",
        type: "series",
        genres: ["action", "historical", "military", "drama"],
        year: 2024,
        rating: 4.9,
        status: "ongoing"
    },
    {
        id: "mashle-2",
        title: "Mashle: Magic and Muscles Season 2",
        type: "series",
        genres: ["comedy", "action", "fantasy", "parody"],
        year: 2024,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "the-fable",
        title: "The Fable",
        type: "series",
        genres: ["action", "comedy", "crime", "drama"],
        year: 2024,
        rating: 4.6,
        status: "ongoing"
    },
    {
        id: "wind-breaker",
        title: "Wind Breaker",
        type: "series",
        genres: ["action", "school", "sports", "drama"],
        year: 2024,
        rating: 4.6,
        status: "ongoing"
    },
    {
        id: "bartender-glass-god",
        title: "Bartender: Glass of God",
        type: "series",
        genres: ["drama", "slice-of-life", "food"],
        year: 2024,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "sound-euphonium-3",
        title: "Sound! Euphonium 3",
        type: "series",
        genres: ["drama", "music", "school", "slice-of-life"],
        year: 2024,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "laid-back-camp-3",
        title: "Laid-Back Camp Season 3",
        type: "series",
        genres: ["comedy", "slice-of-life", "outdoors"],
        year: 2024,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "train-end-world",
        title: "Train to the End of the World",
        type: "series",
        genres: ["adventure", "sci-fi", "mystery", "drama"],
        year: 2024,
        rating: 4.4,
        status: "ongoing"
    },
    {
        id: "vampire-dormitory",
        title: "Vampire Dormitory",
        type: "series",
        genres: ["romance", "supernatural", "vampire", "school"],
        year: 2024,
        rating: 4.3,
        status: "ongoing"
    },
    {
        id: "gods-games-we-play",
        title: "Gods' Games We Play",
        type: "series",
        genres: ["fantasy", "game", "adventure", "comedy"],
        year: 2024,
        rating: 4.4,
        status: "ongoing"
    },
    {
        id: "voice-actor-radio",
        title: "The Many Sides of Voice Actor Radio",
        type: "series",
        genres: ["comedy", "slice-of-life", "drama"],
        year: 2024,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "astro-note",
        title: "Astro Note",
        type: "series",
        genres: ["romance", "comedy", "sci-fi", "slice-of-life"],
        year: 2024,
        rating: 4.4,
        status: "complete"
    },
    {
        id: "unnamed-memory",
        title: "Unnamed Memory",
        type: "series",
        genres: ["fantasy", "romance", "drama", "adventure"],
        year: 2024,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "irregular-magic-high-3",
        title: "The Irregular at Magic High School Season 3",
        type: "series",
        genres: ["action", "sci-fi", "fantasy", "school"],
        year: 2024,
        rating: 4.7,
        status: "ongoing"
    },
    {
        id: "black-butler-public-school",
        title: "Black Butler: Public School Arc",
        type: "series",
        genres: ["mystery", "supernatural", "historical", "drama"],
        year: 2024,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "bocchi-the-rock",
        title: "Bocchi the Rock!",
        type: "series",
        genres: ["comedy", "music", "slice-of-life", "school"],
        year: 2022,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "cyberpunk-edgerunners",
        title: "Cyberpunk: Edgerunners",
        type: "series",
        genres: ["action", "sci-fi", "cyberpunk", "drama"],
        year: 2022,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "lycoris-recoil",
        title: "Lycoris Recoil",
        type: "series",
        genres: ["action", "comedy", "crime", "drama"],
        year: 2022,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "my-hero-academia-7",
        title: "My Hero Academia Season 7",
        type: "series",
        genres: ["action", "superhero", "shounen", "school"],
        year: 2024,
        rating: 4.8,
        status: "ongoing"
    },
    {
        id: "one-piece-egghead",
        title: "One Piece: Egghead Arc",
        type: "series",
        genres: ["action", "adventure", "fantasy", "shounen"],
        year: 2024,
        rating: 4.9,
        status: "ongoing"
    },
    {
        id: "reincarnated-slime-3",
        title: "That Time I Got Reincarnated as a Slime Season 3",
        type: "series",
        genres: ["action", "adventure", "fantasy", "isekai"],
        year: 2024,
        rating: 4.8,
        status: "ongoing"
    },
    {
        id: "mushoku-tensei-2-part2",
        title: "Mushoku Tensei: Jobless Reincarnation Season 2 Part 2",
        type: "series",
        genres: ["fantasy", "adventure", "drama", "isekai"],
        year: 2024,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "kaiju-no-8",
        title: "Kaiju No. 8",
        type: "series",
        genres: ["action", "sci-fi", "monster", "shounen"],
        year: 2024,
        rating: 4.7,
        status: "ongoing"
    },
    {
        id: "shield-hero-3",
        title: "The Rising of the Shield Hero Season 3",
        type: "series",
        genres: ["action", "adventure", "fantasy", "isekai"],
        year: 2023,
        rating: 4.6,
        status: "complete"
    },
    {
        id: "overlord-4",
        title: "Overlord Season 4",
        type: "series",
        genres: ["action", "fantasy", "isekai", "game"],
        year: 2022,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "konosuba-3",
        title: "Konosuba: God's Blessing on This Wonderful World! 3",
        type: "series",
        genres: ["comedy", "fantasy", "adventure", "parody"],
        year: 2024,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "re-zero-3",
        title: "Re:Zero - Starting Life in Another World Season 3",
        type: "series",
        genres: ["drama", "fantasy", "psychological", "isekai"],
        year: 2024,
        rating: 4.9,
        status: "ongoing"
    },
    {
        id: "goblin-slayer-2",
        title: "Goblin Slayer Season 2",
        type: "series",
        genres: ["action", "adventure", "fantasy", "dark"],
        year: 2023,
        rating: 4.6,
        status: "complete"
    },
    {
        id: "eminence-shadow-3",
        title: "The Eminence in Shadow Season 3",
        type: "series",
        genres: ["action", "comedy", "fantasy", "isekai"],
        year: 2024,
        rating: 4.8,
        status: "ongoing"
    },
    {
        id: "devil-part-timer-2",
        title: "The Devil is a Part-Timer! Season 2",
        type: "series",
        genres: ["comedy", "fantasy", "slice-of-life", "reverse-isekai"],
        year: 2022,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "tsukimichi-moonlit-2",
        title: "Tsukimichi: Moonlit Fantasy Season 2",
        type: "series",
        genres: ["action", "comedy", "fantasy", "isekai"],
        year: 2024,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "misfit-demon-king-2-part2",
        title: "The Misfit of Demon King Academy Season 2 Part 2",
        type: "series",
        genres: ["action", "fantasy", "comedy", "school"],
        year: 2023,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "tanya-evil-2",
        title: "The Saga of Tanya the Evil Season 2",
        type: "series",
        genres: ["action", "military", "fantasy", "isekai"],
        year: 2024,
        rating: 4.8,
        status: "ongoing"
    },
    {
        id: "no-game-no-life-2",
        title: "No Game No Life Season 2",
        type: "series",
        genres: ["comedy", "fantasy", "game", "adventure"],
        year: 2024,
        rating: 4.9,
        status: "upcoming"
    },
    {
        id: "chainsaw-man-reze",
        title: "Chainsaw Man Movie: Reze Arc",
        type: "movie",
        genres: ["action", "horror", "supernatural", "drama"],
        year: 2024,
        rating: 4.9,
        status: "upcoming"
    },
    {
        id: "dress-up-darling",
        title: "My Dress-Up Darling",
        type: "series",
        genres: ["romance", "comedy", "slice-of-life", "hobby"],
        year: 2022,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "spy-x-family-code-white",
        title: "Spy x Family Code: White",
        type: "movie",
        genres: ["action", "comedy", "spy", "slice-of-life"],
        year: 2023,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "witch-mercury",
        title: "The Witch from Mercury",
        type: "series",
        genres: ["sci-fi", "mecha", "drama", "space"],
        year: 2022,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "oshi-no-ko-2",
        title: "Oshi no Ko Season 2",
        type: "series",
        genres: ["drama", "music", "psychological", "supernatural"],
        year: 2024,
        rating: 4.9,
        status: "ongoing"
    },
    {
        id: "demon-slayer-hashira",
        title: "Demon Slayer: Hashira Training Arc",
        type: "series",
        genres: ["action", "supernatural", "historical", "shounen"],
        year: 2024,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "attack-on-titan-final",
        title: "Attack on Titan Final Season",
        type: "series",
        genres: ["action", "drama", "fantasy", "horror"],
        year: 2023,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "demon-slayer-entertainment",
        title: "Demon Slayer: Entertainment District Arc",
        type: "series",
        genres: ["action", "supernatural", "historical", "shounen"],
        year: 2021,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "jujutsu-kaisen-2",
        title: "Jujutsu Kaisen Season 2",
        type: "series",
        genres: ["action", "supernatural", "horror", "shounen"],
        year: 2023,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "chainsaw-man",
        title: "Chainsaw Man",
        type: "series",
        genres: ["action", "horror", "supernatural", "shounen"],
        year: 2022,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "spy-x-family-2",
        title: "Spy x Family Season 2",
        type: "series",
        genres: ["action", "comedy", "spy", "slice-of-life"],
        year: 2023,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "oshi-no-ko",
        title: "Oshi no Ko",
        type: "series",
        genres: ["drama", "music", "psychological", "supernatural"],
        year: 2023,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "vinland-saga-2",
        title: "Vinland Saga Season 2",
        type: "series",
        genres: ["action", "historical", "drama", "adventure"],
        year: 2023,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "my-hero-academia-6",
        title: "My Hero Academia Season 6",
        type: "series",
        genres: ["action", "superhero", "shounen", "school"],
        year: 2022,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "bleach-thousand-year",
        title: "Bleach: Thousand-Year Blood War",
        type: "series",
        genres: ["action", "supernatural", "shounen", "adventure"],
        year: 2022,
        rating: 4.9,
        status: "ongoing"
    },
    {
        id: "one-piece-wano",
        title: "One Piece: Wano Country Arc",
        type: "series",
        genres: ["action", "adventure", "fantasy", "shounen"],
        year: 2019,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "heavenly-delusion",
        title: "Heavenly Delusion",
        type: "series",
        genres: ["sci-fi", "mystery", "adventure", "drama"],
        year: 2023,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "mashle",
        title: "Mashle: Magic and Muscles",
        type: "series",
        genres: ["comedy", "action", "fantasy", "parody"],
        year: 2023,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "overtake",
        title: "Overtake!",
        type: "series",
        genres: ["sports", "drama", "cars", "slice-of-life"],
        year: 2023,
        rating: 4.6,
        status: "complete"
    },
    {
        id: "frieren",
        title: "Frieren: Beyond Journey's End",
        type: "series",
        genres: ["fantasy", "adventure", "drama", "slice-of-life"],
        year: 2023,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "apothecary-diaries",
        title: "The Apothecary Diaries",
        type: "series",
        genres: ["mystery", "historical", "drama", "medical"],
        year: 2023,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "pluto",
        title: "Pluto",
        type: "series",
        genres: ["sci-fi", "mystery", "psychological", "thriller"],
        year: 2023,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "zom-100",
        title: "Zom 100: Bucket List of the Dead",
        type: "series",
        genres: ["comedy", "horror", "zombie", "slice-of-life"],
        year: 2023,
        rating: 4.7,
        status: "ongoing"
    },
    {
        id: "undead-unluck",
        title: "Undead Unluck",
        type: "series",
        genres: ["action", "comedy", "supernatural", "shounen"],
        year: 2023,
        rating: 4.6,
        status: "ongoing"
    },
    {
        id: "eminence-shadow-2",
        title: "The Eminence in Shadow Season 2",
        type: "series",
        genres: ["action", "comedy", "fantasy", "isekai"],
        year: 2023,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "jujutsu-kaisen-0",
        title: "Jujutsu Kaisen 0",
        type: "movie",
        genres: ["action", "supernatural", "horror", "shounen"],
        year: 2021,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "suzume",
        title: "Suzume no Tojimari",
        type: "movie",
        genres: ["adventure", "fantasy", "drama", "supernatural"],
        year: 2022,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "demon-slayer-mugen-train",
        title: "Demon Slayer: Mugen Train",
        type: "movie",
        genres: ["action", "supernatural", "historical", "shounen"],
        year: 2020,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "one-piece-red",
        title: "One Piece Film: Red",
        type: "movie",
        genres: ["action", "adventure", "fantasy", "music"],
        year: 2022,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "belle",
        title: "Belle",
        type: "movie",
        genres: ["fantasy", "drama", "music", "sci-fi"],
        year: 2021,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "first-slam-dunk",
        title: "The First Slam Dunk",
        type: "movie",
        genres: ["sports", "drama", "school", "shounen"],
        year: 2022,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "dragon-ball-super-hero",
        title: "Dragon Ball Super: Super Hero",
        type: "movie",
        genres: ["action", "adventure", "sci-fi", "shounen"],
        year: 2022,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "drifting-home",
        title: "Drifting Home",
        type: "movie",
        genres: ["drama", "supernatural", "adventure", "mystery"],
        year: 2022,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "sing-bit-harmony",
        title: "Sing a Bit of Harmony",
        type: "movie",
        genres: ["music", "sci-fi", "drama", "school"],
        year: 2021,
        rating: 4.6,
        status: "complete"
    },
    {
        id: "my-hero-world-heroes",
        title: "My Hero Academia: World Heroes' Mission",
        type: "movie",
        genres: ["action", "superhero", "shounen", "adventure"],
        year: 2021,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "fortune-favors-nikuko",
        title: "Fortune Favors Lady Nikuko",
        type: "movie",
        genres: ["comedy", "drama", "slice-of-life", "family"],
        year: 2021,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "pompo-cinephile",
        title: "Pompo: The Cinephile",
        type: "movie",
        genres: ["comedy", "drama", "slice-of-life", "movie-industry"],
        year: 2021,
        rating: 4.6,
        status: "complete"
    },
    {
        id: "the-wind-rises",
        title: "The Wind Rises",
        type: "movie",
        genres: ["historical", "drama", "romance", "biographical"],
        year: 2013,
        rating: 4.8,
        status: "complete"
    },
    {
        id: "inuyasha-final-act",
        title: "Inuyasha: The Final Act",
        type: "series",
        genres: ["action", "adventure", "fantasy", "romance"],
        year: 2009,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "words-bubble-up-like-soda",
        title: "Words Bubble Up Like Soda Pop",
        type: "movie",
        genres: ["romance", "drama", "music", "slice-of-life"],
        year: 2021,
        rating: 4.6,
        status: "complete"
    },
    {
        id: "chrono-break-zero-paradox",
        title: "Chrono Break: Zero Paradox",
        type: "movie",
        genres: ["sci-fi", "action", "adventure", "time-travel"],
        year: 2023,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "echoes-silent-star",
        title: "Echoes of a Silent Star",
        type: "movie",
        genres: ["sci-fi", "drama", "romance", "space"],
        year: 2023,
        rating: 4.4,
        status: "complete"
    },
    {
        id: "last-alchemist-vega",
        title: "The Last Alchemist of Vega",
        type: "movie",
        genres: ["fantasy", "adventure", "steampunk", "mystery"],
        year: 2023,
        rating: 4.3,
        status: "complete"
    },
    {
        id: "aethelgard-oath-ronin",
        title: "Aethelgard: Oath of the Ronin",
        type: "movie",
        genres: ["action", "historical", "fantasy", "samurai"],
        year: 2023,
        rating: 4.4,
        status: "complete"
    },
    {
        id: "sakura-protocol",
        title: "Sakura Protocol",
        type: "movie",
        genres: ["sci-fi", "action", "cyberpunk", "thriller"],
        year: 2023,
        rating: 4.4,
        status: "complete"
    },
    {
        id: "astra-beyond-nebula",
        title: "Astra: Beyond the Nebula",
        type: "movie",
        genres: ["sci-fi", "space", "adventure", "mystery"],
        year: 2023,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "girl-who-could-see-fate",
        title: "The Girl Who Could See Fate",
        type: "movie",
        genres: ["fantasy", "romance", "drama", "supernatural"],
        year: 2023,
        rating: 4.4,
        status: "complete"
    },
    {
        id: "solstice-riders",
        title: "Solstice Riders",
        type: "movie",
        genres: ["action", "adventure", "western", "fantasy"],
        year: 2023,
        rating: 4.3,
        status: "complete"
    },
    {
        id: "kitsune-no-yomeiri",
        title: "Kitsune no Yomeiri (The Fox's Bride)",
        type: "movie",
        genres: ["fantasy", "romance", "supernatural", "historical"],
        year: 2023,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "gearshift-hearts-final-lap",
        title: "Gearshift Hearts: Final Lap",
        type: "movie",
        genres: ["sports", "romance", "drama", "cars"],
        year: 2023,
        rating: 4.4,
        status: "complete"
    },
    {
        id: "umbra-shadow-weavers",
        title: "Umbra: The Shadow Weavers",
        type: "movie",
        genres: ["fantasy", "action", "adventure", "dark"],
        year: 2023,
        rating: 4.4,
        status: "complete"
    },
    {
        id: "cafe-between-seconds",
        title: "Café Between Seconds",
        type: "movie",
        genres: ["slice-of-life", "drama", "supernatural", "mystery"],
        year: 2023,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "astral-requiem",
        title: "Astral Requiem",
        type: "movie",
        genres: ["fantasy", "drama", "music", "supernatural"],
        year: 2023,
        rating: 4.4,
        status: "complete"
    },
    {
        id: "clockmakers-forgotten-melody",
        title: "The Clockmaker's Forgotten Melody",
        type: "movie",
        genres: ["mystery", "fantasy", "drama", "steampunk"],
        year: 2023,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "prismaker",
        title: "Prismaker",
        type: "movie",
        genres: ["fantasy", "adventure", "art", "drama"],
        year: 2023,
        rating: 4.4,
        status: "complete"
    },
    {
        id: "starlight-scavengers",
        title: "Starlight Scavengers",
        type: "movie",
        genres: ["sci-fi", "adventure", "space", "comedy"],
        year: 2023,
        rating: 4.4,
        status: "complete"
    },
    {
        id: "yurei-jo-ghost-castle",
        title: "Yurei-jo: The Ghost Castle Ballad",
        type: "movie",
        genres: ["horror", "supernatural", "historical", "mystery"],
        year: 2023,
        rating: 4.3,
        status: "complete"
    },
    {
        id: "onibi-dance-will-wisps",
        title: "Onibi: Dance of the Will-o'-Wisps",
        type: "movie",
        genres: ["fantasy", "supernatural", "adventure", "mystery"],
        year: 2023,
        rating: 4.4,
        status: "complete"
    },
    {
        id: "mecha-diver-2099",
        title: "Mecha-Diver 2099",
        type: "movie",
        genres: ["sci-fi", "action", "adventure", "mecha"],
        year: 2023,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "library-endless-pages",
        title: "The Library of Endless Pages",
        type: "movie",
        genres: ["fantasy", "adventure", "mystery", "supernatural"],
        year: 2023,
        rating: 4.4,
        status: "complete"
    },
    {
        id: "black-panther-wakanda-forever",
        title: "Black Panther: Wakanda Forever",
        type: "movie",
        genres: ["action", "adventure", "sci-fi", "superhero"],
        year: 2022,
        rating: 4.6,
        status: "complete"
    },
    {
        id: "thor-love-thunder",
        title: "Thor: Love and Thunder",
        type: "movie",
        genres: ["action", "adventure", "comedy", "superhero"],
        year: 2022,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "eternals",
        title: "Eternals",
        type: "movie",
        genres: ["action", "adventure", "sci-fi", "superhero"],
        year: 2021,
        rating: 4.4,
        status: "complete"
    },
    {
        id: "shang-chi-legend-rings",
        title: "Shang-Chi and the Legend of the Ten Rings",
        type: "movie",
        genres: ["action", "adventure", "fantasy", "superhero"],
        year: 2021,
        rating: 4.7,
        status: "complete"
    },
    {
        id: "black-widow",
        title: "Black Widow",
        type: "movie",
        genres: ["action", "adventure", "spy", "superhero"],
        year: 2021,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "avengers-endgame",
        title: "Avengers: Endgame",
        type: "movie",
        genres: ["action", "adventure", "sci-fi", "superhero"],
        year: 2019,
        rating: 4.9,
        status: "complete"
    },
    {
        id: "captain-marvel",
        title: "Captain Marvel",
        type: "movie",
        genres: ["action", "adventure", "sci-fi", "superhero"],
        year: 2019,
        rating: 4.5,
        status: "complete"
    },
    {
        id: "avengers-infinity-war",
        title: "Avengers: Infinity War",
        type: "movie",
        genres: ["action", "adventure", "sci-fi", "superhero"],
        year: 2018,
        rating: 4.9,
        status: "complete"
    },

    {
        id: "ironheart",
        title: "Iron Heart",
        type: "series",
        genres: ["action", "adventure", "sci-fi", "superhero", "drama"],
        director: "Various",
        cast: ["Dominique Thorne", "Anthony Ramos", "Lyric Ross", "Harper Anthony"],
        budget: "N/A",
        language: "Hindi",
        status: "upcoming",
        year: 2023,
        rating: 0,
        network: "Disney+",
        duration: 45,
        popularity: 85,
        link: "ironheart.html",
        img: "https://m.media-amazon.com/images/M/MV5BZDI4MjY0OGYtN2QwZS00N2JmLWJmZWItM2M0Y2M0OTJiY2E3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "moonknight",
        title: "Moon Knight",
        type: "series",
        genres: ["action", "adventure", "fantasy", "superhero", "psychological"],
        director: "Mohamed Diab",
        cast: ["Oscar Isaac", "Ethan Hawke", "May Calamawy", "Karim El Hakim"],
        budget: "N/A",
        language: "Hindi",
        status: "complete",
        year: 2022,
        rating: 4.5,
        network: "Disney+",
        duration: 50,
        popularity: 88,
        link: "moonknight.html",
        img: "https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "msmarvel",
        title: "Ms. Marvel",
        type: "series",
        genres: ["action", "adventure", "comedy", "superhero", "coming-of-age"],
        director: "Various",
        cast: ["Iman Vellani", "Matt Lintz", "Yasmeen Fletcher", "Zenobia Shroff"],
        budget: "N/A",
        language: "Hindi",
        status: "complete",
        year: 2022,
        rating: 4.6,
        network: "Disney+",
        duration: 45,
        popularity: 84,
        link: "msmarvel.html",
        img: "https://m.media-amazon.com/images/M/MV5BZmNjYjBhYjMtZGEyOC00OWNiLTllMzUtZDg2MTA2Y2M1ZDY0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "hawkeye",
        title: "Hawkeye",
        type: "series",
        genres: ["action", "adventure", "crime", "superhero", "drama"],
        director: "Rhys Thomas",
        cast: ["Jeremy Renner", "Hailee Steinfeld", "Florence Pugh", "Vera Farmiga"],
        budget: "N/A",
        language: "Hindi",
        status: "complete",
        year: 2021,
        rating: 4.4,
        network: "Disney+",
        duration: 50,
        popularity: 87,
        link: "hawkeye.html",
        img: "https://m.media-amazon.com/images/M/MV5BOWQ2ODc0ZGEtNmYzYS00ZmM0LTk5ZjAtMjliYmFkNGNmY2E4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "loki",
        title: "Loki",
        type: "series",
        genres: ["action", "adventure", "sci-fi", "fantasy", "superhero"],
        director: "Kate Herron",
        cast: ["Tom Hiddleston", "Sophia Di Martino", "Owen Wilson", "Gugu Mbatha-Raw"],
        budget: "N/A",
        language: "Hindi",
        status: "ongoing",
        year: 2021,
        rating: 4.7,
        network: "Disney+",
        duration: 52,
        popularity: 92,
        link: "loki.html",
        img: "https://m.media-amazon.com/images/M/MV5BNTgwOTE1ZjMtYTQ4Yy00MmM1LWI2OGYtOTBmZDliZmE2MWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "wandavision",
        title: "WandaVision",
        type: "series",
        genres: ["drama", "fantasy", "superhero", "sitcom", "mystery"],
        director: "Matt Shakman",
        cast: ["Elizabeth Olsen", "Paul Bettany", "Kathryn Hahn", "Teyonah Parris"],
        budget: "N/A",
        language: "Hindi",
        status: "complete",
        year: 2021,
        rating: 4.8,
        network: "Disney+",
        duration: 50,
        popularity: 93,
        link: "wandavision.html",
        img: "https://m.media-amazon.com/images/M/MV5BZGEwYmMwZmMtMTQ3MS00YWNhLWEwMmQtZTU5YTIwZmJjZGQ0XkEyXkFqcGdeQXVyMTI5MzA5MjA1._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "falcon-wintersoldier",
        title: "Falcon & Winter Soldier",
        type: "series",
        genres: ["action", "adventure", "drama", "superhero", "thriller"],
        director: "Kari Skogland",
        cast: ["Anthony Mackie", "Sebastian Stan", "Wyatt Russell", "Erin Kellyman"],
        budget: "N/A",
        language: "Hindi",
        status: "complete",
        year: 2021,
        rating: 4.3,
        network: "Disney+",
        duration: 50,
        popularity: 89,
        link: "falcon-wintersoldier.html",
        img: "https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyYjYtMzJhMzk4YjMyYTI0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "shehulk",
        title: "She-Hulk",
        type: "series",
        genres: ["action", "comedy", "superhero", "legal", "drama"],
        director: "Kat Coiro",
        cast: ["Tatiana Maslany", "Jameela Jamil", "Ginger Gonzaga", "Josh Segarra"],
        budget: "N/A",
        language: "Hindi",
        status: "complete",
        year: 2022,
        rating: 4.2,
        network: "Disney+",
        duration: 35,
        popularity: 83,
        link: "shehulk.html",
        img: "https://m.media-amazon.com/images/M/MV5BMjU4MTkxNzktNzUyYy00NDM2LWE5NGQtZmY5N2ExNDM0MDk2XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "whatif",
        title: "What If...?",
        type: "series",
        genres: ["animation", "action", "adventure", "sci-fi", "superhero"],
        director: "Bryan Andrews",
        cast: ["Jeffrey Wright", "Hayley Atwell", "Josh Brolin", "Samuel L. Jackson"],
        budget: "N/A",
        language: "Hindi",
        status: "ongoing",
        year: 2021,
        rating: 4.5,
        network: "Disney+",
        duration: 32,
        popularity: 86,
        link: "whatif.html",
        img: "https://m.media-amazon.com/images/M/MV5BMWZjN2Y4OWYtYjU4OS00N2I0LWIzMzctYjg7MzJmY2VkZTc0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "echo",
        title: "Echo",
        type: "series",
        genres: ["action", "crime", "drama", "superhero", "thriller"],
        director: "Sydney Freeland",
        cast: ["Alaqua Cox", "Chaske Spencer", "Zahn McClarnon", "Devery Jacobs"],
        budget: "N/A",
        language: "Hindi",
        status: "upcoming",
        year: 2023,
        rating: 0,
        network: "Disney+",
        duration: 45,
        popularity: 80,
        link: "echo.html",
        img: "https://m.media-amazon.com/images/M/MV5BNmY4YzBhYjYtYzFhNy00YzcxLWJmZWItMDhiYTkyYjM5N2Q1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "secretinvasion",
        title: "Secret Invasion",
        type: "series",
        genres: ["action", "adventure", "sci-fi", "spy", "superhero"],
        director: "Thomas Bezucha",
        cast: ["Samuel L. Jackson", "Ben Mendelsohn", "Emilia Clarke", "Olivia Colman"],
        budget: "N/A",
        language: "Hindi",
        status: "upcoming",
        year: 2023,
        rating: 0,
        network: "Disney+",
        duration: 50,
        popularity: 90,
        link: "secretinvasion.html",
        img: "https://m.media-amazon.com/images/M/MV5BMDY4YjJjYWMtN2Q1MC00MjliLWI5MDAtODJjZGM5MzE2YjBhXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "xmen97",
        title: "X-Men '97",
        type: "series",
        genres: ["animation", "action", "adventure", "sci-fi", "superhero"],
        director: "Jake Castorena",
        cast: ["Ray Chase", "Jennifer Hale", "Alison Sealy-Smith", "Cal Dodd"],
        budget: "N/A",
        language: "Hindi",
        status: "upcoming",
        year: 2023,
        rating: 0,
        network: "Disney+",
        duration: 30,
        popularity: 82,
        link: "xmen97.html",
        img: "https://m.media-amazon.com/images/M/MV5BZjg4ZDY3Y2YtN2VkZC00M2Q0LWI0ZTgtY2JkZWM0MDc3YjU1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "agatha-darkholddiaries",
        title: "Agatha: Darkhold Diaries",
        type: "series",
        genres: ["fantasy", "horror", "comedy", "superhero", "drama"],
        director: "Jac Schaeffer",
        cast: ["Kathryn Hahn", "Aubrey Plaza", "Joe Locke", "Patti LuPone"],
        budget: "N/A",
        language: "Hindi",
        status: "upcoming",
        year: 2023,
        rating: 0,
        network: "Disney+",
        duration: 45,
        popularity: 81,
        link: "agatha-darkholddiaries.html",
        img: "https://m.media-amazon.com/images/M/MV5BZjI4YzE1YzYtMzU0OS00NGYwLWI3YzctN2I0MzU1YjQ5Y2U1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "daredevil-bornagain",
        title: "Daredevil: Born Again",
        type: "series",
        genres: ["action", "crime", "drama", "superhero", "legal"],
        director: "Various",
        cast: ["Charlie Cox", "Vincent D'Onofrio", "Jon Bernthal", "Deborah Ann Woll"],
        budget: "N/A",
        language: "Hindi",
        status: "upcoming",
        year: 2024,
        rating: 0,
        network: "Disney+",
        duration: 50,
        popularity: 94,
        link: "daredevil-bornagain.html",
        img: "https://m.media-amazon.com/images/M/MV5BODUwMDYwNDg1N15BMl5BanBnXkFtZTgwNDg5NTI0NjM@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "ironfist",
        title: "Iron Fist",
        type: "series",
        genres: ["action", "adventure", "drama", "superhero", "martial-arts"],
        director: "Various",
        cast: ["Finn Jones", "Jessica Henwick", "Tom Pelphrey", "Jessica Stroup"],
        budget: "N/A",
        language: "Hindi",
        status: "complete",
        year: 2017,
        rating: 3.8,
        network: "Netflix",
        duration: 55,
        popularity: 78,
        link: "ironfist.html",
        img: "https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxNDY3MTI@._V1_FMjpg_UX1000_.jpg"
    },



];

// ➕ Add the rest of your anime data here



