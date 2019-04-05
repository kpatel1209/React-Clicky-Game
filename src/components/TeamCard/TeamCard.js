import React from "react";
import "./TeamCard.css";

const TeamCard = props => (
  <div className="card">
    <div className="card-body">
      <img 
        alt={"Team #" + props.id}
        src={props.image}
        onClick={() => props.confirmClick(props.id)}
      />
    </div>  
  </div>
)

export default TeamCard;