


import { useState, useEffect } from "react";
 
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
   
  const apiKey = "3ee8902b";  
   
  const [movie, setMovie] = useState(null);

   
  const getMovie = async (searchTerm) => {
    try {
       
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );

      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

       
      const data = await response.json();

       
      if (data.Response === "False") {
        throw new Error("Movie not found!");
      }

       
      setMovie(data);
    } catch (error) {
      console.error("Error fetching the movie:", error);
      
      setMovie({ Error: error.message });
    }
  };

  
  const getRandomSearchTerm = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  };

   
  useEffect(() => {
    const randomSearchTerm = getRandomSearchTerm();  
    getMovie(randomSearchTerm);  
  }, []);  
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}



