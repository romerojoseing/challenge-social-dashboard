import React from 'react';
import './overview.css'
import CardSmall from './card-small'

const cardListData = [
  {
    id: 1,
    text: 'Page Views',
    icon: 'img/icon-facebook.svg',
    view: 87,
    percentage: 3, 
  },
  {
    id: 2,
    text: 'Likes',
    icon: 'img/icon-facebook.svg',
    view: 52,
    percentage: -2, 
  },
  {
    id: 3,
    text: 'Likes',
    icon: 'img/icon-twitter.svg',
    view: 5462,
    percentage: 2257, 
  },
  {
    id: 4,
    text: 'Page Views',
    icon: 'img/icon-twitter.svg',
    view: 52,
    percentage: 1375, 
  },
  {
    id: 5,
    text: 'Retweets',
    icon: 'img/icon-instagram.svg',
    view: 111,
    percentage: 303, 
  },
  {
    id: 6,
    text: 'Likes',
    icon: 'img/icon-instagram.svg',
    view: 507,
    percentage: 553, 
  },
  {
    id: 7,
    text: 'Likes',
    icon: 'img/icon-youtube.svg',
    view: 107,
    percentage: -19, 
  },
  {
    id: 8,
    text: 'Total Views',
    icon: 'img/icon-youtube.svg',
    view: 1407,
    percentage: -12, 
  },
    
];

function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {
            cardListData.map((cardData) => (
              <CardSmall key={cardData.id} {...cardData} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Overview