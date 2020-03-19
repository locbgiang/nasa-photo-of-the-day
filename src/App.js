import React, { useState, useEffect } from "react";
import "./App.css";
import styled from 'styled-components';
import PageHeader from "./PageHeader.js";
import PageBody from "./PageBody.js";
import axios from "axios";

const PageWrapDiv = styled.div`
    background-color: black;
`;

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=bkAAy6GryXQqaiIGxYGlZjJC4PF0n430pZOFAECe").then(response => {
      //console.log(response.data);
      setData(response.data);
    })
      .catch(error => {
        console.log('error', error);
      });
  }, []);
  console.log(data);
  //console.log(image);
  return (
    <div className="App">
      <PageWrapDiv>
      <PageHeader/>
      <PageBody 
        author = {data.copyright}
        date = {data.date}
        title = {data.title}
        image = {data.url}
        article = {data.explanation}
      />
      <p>
      </p>
      </PageWrapDiv>
    </div>
  );
}

export default App;
