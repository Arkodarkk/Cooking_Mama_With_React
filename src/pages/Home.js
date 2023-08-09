import React from 'react';
import Navigation from '../components/Navigation';
import Title from '../components/Title';
import Recipes from '../components/Recipes';

const Home = () => {
   return (
      <div>
         <Title />
         <Navigation />
         <Recipes />
      </div>
   );
};

export default Home;