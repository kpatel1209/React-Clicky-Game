import React from "react";
import "./TeamCard.css";

const TeamCard = props => (
  <div className="card">
    <div className="img-container">
      <img 
        alt={"Team #" + props.id}
        src={props.logo}
        onClick={() => props.confirmClick(props.id)}
      />
    </div>  
  </div>
)

export default TeamCard;