import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
            src='https://images.pexels.com/photos/5008835/pexels-photo-5008835.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/services'
          />
            <CardItem
              src='https://images.pexels.com/photos/5014374/pexels-photo-5014374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.pexels.com/photos/3464799/pexels-photo-3464799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://images.pexels.com/photos/4887433/pexels-photo-4887433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://images.pexels.com/photos/4685131/pexels-photo-4685131.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;