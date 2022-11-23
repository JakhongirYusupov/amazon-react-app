import React from 'react';
import HeroBanner from '../../components/hero-banner/HeroBanner';
import Main from '../../components/main/Main';
import { Mainbottom } from '../../components/main-bottom-signin/Mainbottom';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Main />
      <Mainbottom />
    </div>
  )
}

export default Home