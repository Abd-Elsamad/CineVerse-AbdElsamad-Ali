/* ==========================================
   DOM Elements
========================================== */

const moviesGrid = document.querySelector(".movies-grid");
const searchInput = document.getElementById("searchInput");
const notificationBtn = document.querySelector(".notification-btn");
const loader = document.querySelector(".loader");
const closeModal = document.querySelector(".close-modal");


/* ==========================================
   Global Variables
========================================== */

let movies = [];

let favoriteMovies =
    JSON.parse(localStorage.getItem("favorites")) || [];


/* ==========================================
   Start Application
========================================== */

document.addEventListener("DOMContentLoaded", init);


/* ==========================================
   Main Function
========================================== */

function init() {

    loadFavorites();

    loadMovies();

    setupSearch();

    closeModal.addEventListener("click", closeMovieModal);

}


/* ==========================================
   Favorites
========================================== */

function loadFavorites(){

    favoriteMovies =
        JSON.parse(localStorage.getItem("favorites")) || [];

}


/* ==========================================
   Search
========================================== */

function setupSearch() {

    searchInput.addEventListener("input", function () {

        const searchText = this.value.toLowerCase().trim();

        const filteredMovies = movies.filter(function (movie) {

            return movie.title
                .toLowerCase()
                .includes(searchText);

        });

        renderMovies(filteredMovies);

    });

}
function toggleFavorite(movie,button){

    const exists =
        favoriteMovies.find(function(f){

            return f.id===movie.id;

        });

    if(exists){

        favoriteMovies =
            favoriteMovies.filter(function(f){

                return f.id!==movie.id;

            });

        button.classList.remove("active");

        button.innerHTML =
            '<i class="fa-regular fa-heart"></i>';

    }

    else{

        favoriteMovies.push(movie);

        button.classList.add("active");

        button.innerHTML =
            '<i class="fa-solid fa-heart"></i>';

    }

    localStorage.setItem(

        "favorites",

        JSON.stringify(favoriteMovies)

    );

}