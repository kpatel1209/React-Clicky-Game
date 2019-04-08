import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">NFL Team Memory Game</h1>
    <h5 className="click-card">Click any team logo, but only click it once!</h5>
    <h3 className="score">Current Score: {props.score} | Score to Beat: {props.target}</h3>
  </div>
</div>
)

export default Jumbotron;