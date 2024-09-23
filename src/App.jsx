import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
 export default function App() {
  const apiKey = "3ee8902b";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error("Error fetching the movie data:", error);
    }
  };

  // This will run on the first render but not on subsequent renders
  useEffect(() => {
    // Fetch a default movie when the component mounts
    getMovie("Clueless");
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );

  
}





