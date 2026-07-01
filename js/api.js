/* ==========================================
   TMDB API
========================================== */

const API_KEY = "bfbe4fde4ece74b114b6f884196366cc";

const BASE_URL = "https://api.themoviedb.org/3";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";


/* ==========================================
   Load Trending Movies
========================================== */

async function loadMovies() {

    try {

        const response = await fetch(
            `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
        );

        const data = await response.json();

        movies = data.results;

        renderMovies(movies);

        loader.classList.add("hide");

    }

    catch (error) {

        console.error(error);
        loader.classList.add("hide");

    }

}