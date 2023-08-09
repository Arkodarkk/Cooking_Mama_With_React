import React from 'react';
import Title from '../components/Title';
import Navigation from '../components/Navigation';
import CookingMamaImage from '../assets/images/Cooking_Mama_B.webp'

const About = () => {
   return (
      <div>
         <Title />
         <Navigation />
         <div className="about-container">
            <img src={CookingMamaImage} alt="Cooking Mama" />
            <div className='presentation'>
               <p className='intro-header'>Bienvenue sur mon site !</p>
               <p className='intro-body'>Ici, vous trouverez toutes les recettes que vous pouvez imaginer et plus encore ! Allez sur la page "Recettes" et commencez vos recherches en renseignant un ingrédient et vous pourrez consulter toute une sélection de fiches alléchantes 😊
               </p>
            </div>
         </div>
      </div>
   );
};

export default About;