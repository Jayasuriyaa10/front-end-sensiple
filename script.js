// Movie search and display function
document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movie-list');
    const searchInput = document.getElementById('search-movie');

    // Sample list of movies with titles and image paths
    const movies = [
        { title: "THE SUBSTANCE", image: "assets/images/substance1.jpg" },
        { title: "INGLOURIOUS BASTERDS", image: "assets/images/inglourious.jpg" },
        { title: "THE IRISHMAN", image: "assets/images/irishman.jpg" },
        { title: "CHUNGKIN EXPRESS", image: "assets/images/chungkin.jpg" },
        { title: "RAGING BULL", image: "assets/images/raging.jpg" }
    ];

    // Function to display movies in the movie list
    function displayMovies(filteredMovies) {
        movieList.innerHTML = ''; // Clear the current movie list
        filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <button onclick="bookTicket('${movie.title}', '${movie.image}')">Book Ticket</button>
            `;
            movieList.appendChild(movieCard);
        });
    }

    // Display all movies by default
    displayMovies(movies);

    // Add an event listener to the search input field to filter movies
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase(); // Get the search query
        const filteredMovies = movies.filter(movie =>
            movie.title.toLowerCase().includes(query) // Filter based on the query
        );
        displayMovies(filteredMovies); // Display filtered movies
    });
});

// Function for booking tickets
// Function for booking tickets
function bookTicket(movieTitle, movieImage) {
    // Redirect to booking page with movie name (for simplicity, show an alert)
    alert(`Booking for: ${movieTitle}`);

    // Store the selected movie details in localStorage
    localStorage.setItem('movieTitle', movieTitle);
    localStorage.setItem('movieImage', movieImage);

    // Redirect to booking page
    window.location.href = "booking.html"; // Ensure the correct redirect
}
