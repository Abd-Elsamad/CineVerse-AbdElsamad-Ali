const movieModal = document.querySelector(".movie-modal");

const modalImage = document.querySelector(".modal-image");

const modalTitle = document.querySelector(".modal-title");

const modalRating = document.querySelector(".modal-rating");

const modalDate = document.querySelector(".modal-date");

const modalDescription = document.querySelector(".modal-description");
function renderMovies(movieList) {

    moviesGrid.innerHTML = "";

    if (movieList.length === 0) {

        moviesGrid.innerHTML = `

            <div class="no-results">

                <h2>No Movies Found 😢</h2>

            </div>

        `;

        return;

    }

    movieList.forEach(function(movie){

        const card = document.createElement("div");

        card.className = "movie-card";

        card.innerHTML = `

            <img
                src="${IMAGE_URL}${movie.poster_path}"
                alt="${movie.title}"
            >

                <div class="movie-info">

        <span class="rating">

            ⭐ ${movie.vote_average.toFixed(1)}

        </span>

        <h3>

            ${movie.title}

        </h3>

        <p>

            ${movie.release_date}

        </p>

        <button class="favorite-icon">

            <i class="fa-regular fa-heart"></i>

        </button>

    </div>

        `;

        moviesGrid.appendChild(card);
        card.addEventListener("click",function(){

    openMovieModal(movie);

});

    });

}
function openMovieModal(movie){

    modalImage.src =
        movie.poster_path
        ? IMAGE_URL + movie.poster_path
        : "images/movie-placeholder.jpg";

    modalTitle.textContent = movie.title;

    modalRating.textContent =
        "⭐ " + movie.vote_average.toFixed(1);

    modalDate.textContent =
        "📅 " + movie.release_date;

    modalDescription.textContent =
        movie.overview;

    movieModal.style.display = "flex";

}
/* ==========================================
   Close Movie Modal
========================================== */

function closeMovieModal() {

    movieModal.style.display = "none";

}
movieModal.addEventListener("click", function (e) {

    if (e.target === movieModal) {

        closeMovieModal();

    }

});