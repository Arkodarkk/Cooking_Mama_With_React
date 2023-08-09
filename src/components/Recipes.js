import React, { useState, useEffect } from "react";
import Card from "./Card";
import Search from "./Search";
import axios from "axios";


const Recipes = () => {
	const [searchValue, setSearchValue] = useState("o");
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
			)
			.then((res) => setData(res.data.meals));
	}, [searchValue]);

	const handleSearch = (value) => {
		setSearchValue(value);
	};

	const sortByMealName = (a, b) => a.strMeal.localeCompare(b.strMeal);

	return (
		<div className="recipes-container">
			<div className="searchbar-container">
				<Search onSearch={handleSearch} />
			</div>
			{data !== null && searchValue.length > 0 ? (
				<ul className="cards-container">
					{data
						.sort(sortByMealName)
						.map((meal, idMeal) => (
							<li key={idMeal}>
								<Card meal={meal} />
							</li>
						))}
				</ul>
			) : (
				<p className="no-meals">Aucun plat trouvé</p>
			)}
		</div>
	);
};

export default Recipes;
