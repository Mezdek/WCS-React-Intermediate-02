import "./App.css";
import React, { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState([]);

  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((data) => {
        setQuote(data.data);
      })
      .catch((err) => console.log("Error: ", err));
  };

  useEffect(getQuote, []);

  return (
    <div className="App">
      {quote.map((item, index) => (
        <QuoteCard key={index} {...item} />
      ))}
      <button onClick={getQuote}>Get another quote</button>
    </div>
  );
}

export default App;
