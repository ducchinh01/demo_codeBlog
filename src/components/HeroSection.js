import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/video-1.mp4' autoPlay loop muted />
      <h1>FRONT END DEVELOPER</h1>
      <p>
      Do you want to be a programmer?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH VIDEO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;