import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import WeatherRow from "./WeatherRow";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Form />
      <WeatherRow />

      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
