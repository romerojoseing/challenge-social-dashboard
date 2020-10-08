import React from "react";
import "./card-small.css";


function CardSmall({text, icon, view, percentage}) {
  return (
    <article className="card-small">
      <p className="card-small-views">{text}</p>
      <p className="card-small-icon">
        <img src={icon} alt="" />
      </p>
      <p className="card-small-number">{view}</p>
      <p className="card-small-percentage">
        <span>
  <img src="img/icon-up.svg" alt="" /> {percentage}%
              </span>
      </p>
    </article>
  );
}

export default CardSmall