import { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import useApi from "./hooks/useApi";
import Weather from "./componets/Weather";




function App() {


  return (
    <div className="App">

    <Weather/>

      {/* <h1>{response.results?.[0].name.first}</h1>
      */}

  <footer><p>Create by: Jorge Castaño</p></footer>
    </div>
  );
}

export default App;
