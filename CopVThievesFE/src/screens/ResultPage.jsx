import React from "react";
import '../CSS/result.css'
import { Link } from "react-router-dom";

const ResultPage = ({ message }) => {
   
    console.log(message)
  return <>
  <div className="message">{message}</div>
  <div className="btn-container">
    <Link to={"/game"} className="button">Play Again</Link>
    <Link to={"/"} className="button">Quit</Link>
  </div>
  </>;
};

export default ResultPage;
