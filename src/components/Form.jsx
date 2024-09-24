 

import { useState, useEffect } from "react";
import "./Form.css";

export default function Form(props) {
   
  const [formData, setFormData] = useState({
    searchterm: "",
  });
 
  useEffect(() => {
    const randomMovies = ["Inception", "Titanic", "Interstellar", "The Matrix", "Gladiator"];
   
    const randomMovie = randomMovies[Math.floor(Math.random() * randomMovies.length)];
    
    
    props.moviesearch(randomMovie);
  }, []);  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.moviesearch(formData.searchterm);
  };

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <form onSubmit={handleSubmit}>
        <input
          className="large-input"
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input className="large-input" type="submit" value="Submit" />
      </form>
    </div>
  );
}
