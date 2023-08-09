import React from "react";
import translations from "./Translations";

const Card = ({ meal }) => {
	const translatedCategory = translations.categories[meal.strCategory];
	const translatedOrigin = translations.origins[meal.strArea];

	//Récupération des ingrédients
	const ingredients = [];
   const isLongText = meal.strMeal.length > 40

	for (let i = 1; i <= 20; i++) {
		const ingredientKey = `strIngredient${i}`;

		if (meal[ingredientKey]) {
			const translatedIngredient =
				translations.ingredients[meal[ingredientKey]] || meal[ingredientKey];
			ingredients.push(<li key={i}>{i}. {translatedIngredient}</li>);
		}
	}

	return (
		<div className="card-wrapper">
			<div className="meal-title">
				<h2 className={`${isLongText ? "long-text" : ""}`}>{meal.strMeal}</h2>
			</div>
			<div className="meal-category">
				{translatedCategory}
			</div>
         <div className="meal-picture" data-meal={meal.strMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
         </div>
			<div className="meal-area">
				{"(Origine " + translatedOrigin + ")"}
			</div>
			<div className="ingredients-container">
				<h3>Ingrédients</h3>
				<ul className="ingredients-list">
               {ingredients}
            </ul>
			</div>
		</div>
	);
};

export default Card;
