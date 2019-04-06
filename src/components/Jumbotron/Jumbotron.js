import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">NFL Team Memory Game</h1>
    <p className="click-card">Click any team, but only click it once!</p>
    <h3 className="score">Score: {props.score} | Top Score: {props.target}</h3>
  </div>
</div>
)

export default Jumbotron;