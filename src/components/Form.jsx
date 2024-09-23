import {useState, useEffect} from "react";
import "./Form.css";
export default function Form (props) {
    // State to hold the data of our form
    const [formData, setFormData] = useState({
      searchterm: "",
    });
    
  
     
    const handleChange = (event) => {
       
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
       
      event.preventDefault();
       
      props.moviesearch(formData.searchterm);
    };
  
    return (
      <div style={{ backgroundColor: 'lightblue' }}>
        <form onSubmit={handleSubmit}>
          <input className="large-input"
            type="text"
            name="searchterm"
            onChange={handleChange}
            value={formData.searchterm}
            
          />
          <input class="large-input" type="submit" value="Submit" />
        </form>
      </div>
    );
  }