import React from 'react';
import './top-card-list.css';
import Card from './card';

const cardListData = [
  {
    id: 1,
    username: '@romerojoseing',
    followers: '1987',
    todayFollowers: 12,
    icon: 'img/icon-facebook.svg',
    name: 'facebook',
  },
  {
    id: 2,
    username: '@romerojoseing',
    followers: '1044',
    todayFollowers: 99,
    icon: 'img/icon-twitter.svg',
    name: 'twitter',
  },
  {
    id: 3,
    username: '@romerojoseing',
    followers: '11k',
    todayFollowers: 1099,
    icon: 'img/icon-instagram.svg',
    name: 'instagram',
  },
  {
    id: 4,
    username: '@romerojoseing',
    followers: '8239',
    todayFollowers: -144,
    icon: 'img/icon-youtube.svg',
    name: 'youtube',
  },
];

function TopCardList(){
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          
          {
            cardListData.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
            ))
          }

        </div>
      </div>
    </section>
  );  
}

export default TopCardList