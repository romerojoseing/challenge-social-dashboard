import React from "react";
import "./card.css";

function Card({username, followers, todayFollowers, icon, name}) {
  const cardClass = `card ${name}`
  return (
    <article className={cardClass}>
      <p className="card-title">
        <img src={icon} alt="" />
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-text">Followers</span>
      </p>
      <p className="card-today">
        <img src="img/icon-up.svg" alt="" />
        {todayFollowers} today
      </p>
    </article>
  );
}

export default Card;
