export default function MovieDisplay({ movie }) {
 
    if (!movie) {
      return <h2>Search for a movie to see its details!</h2>;
    }
  
    if (movie.Response === "False") {
      return <h2>Movie not found. Please try another search.</h2>;
    }
  
    return (
      <div div style={{ backgroundColor: 'green' }}>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
      </div>
    );
  }
  //The movie API key and the list of movies it can fetch 
  // Movie api key
  //  http://www.omdbapi.com/?i=tt3896198&apikey=3ee8902b
  
  // 1. Inception
  // 2. The Dark Knight
  // 3. Pulp Fiction
  // 4. The Godfather
  // 5. Forrest Gump
  // 6. Fight Club
  // 7. The Matrix
  // 8. The Shawshank Redemption
  // 9. Interstellar
  // 10. The Avengers
  //11.Harry Potter
  //12.Star Wars
  //13. Avatar
  //14.Christmas
  //15.Goat
  