import React from "react";
import "./TeamCard.css";

const TeamCard = props => (
    <div className="card">
      <div className="logo-container">
        <img 
          alt={props.name}
          src={props.logo}
          onClick={() => props.confirmClick(props.id)}
        />
      </div>  
    </div>
)

export default TeamCard;