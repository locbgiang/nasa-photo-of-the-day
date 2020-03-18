import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=bkAAy6GryXQqaiIGxYGlZjJC4PF0n430pZOFAECe").then(response => {
      setData(response.data);
    })
      .catch(error => {
        console.log('error', error);
      });
  }, []);
  //console.log(data.url);
  //console.log(image);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      hello?
      <img src={data.url} />
    </div>
  );
}

export default App;
