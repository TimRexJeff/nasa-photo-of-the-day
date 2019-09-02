import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./components/PhotoCard"
import "./App.scss";

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=cvQfsM1Yd2opQ3UAQEufPMMPRinnTReNGgUeirlt&date=2019-07-15")
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <div className="photo-cards">
      {data
        ? <PhotoCard  title={data.title}
                      url={data.url}
                      explanation={data.explanation}
                      date={data.date} />
        : <div>Loading</div>
      }
      </div>
    </div>
  );
}

export default App;
