import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
	const [search, setSerach] = useState("");
	const [recipes, setRecipes] = useState([]);

	const appid = "8bbf1d1c";
	const key = "aa0ef0cf04cbcefa39546f89221be1ba";

	const getRecipes = async () => {
		const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${appid}&app_key=${key}&from=0&to=6&calories=591-722&health=alcohol-free`);
		setRecipes(res.data.hits);
	};

	const onInputChange = e => {
		console.log("e.target.value");
		console.log(e.target.value);
		setSerach(e.target.value);
	};

	const onSearchClick = () => {
		getRecipes();
	};

	return (
		<div className="App">
			<Header
				search={search}
				onInputChange={onInputChange}
				onSearchClick={onSearchClick}
			/>
			<div className="container">
				<Recipes recipes={recipes} />
			</div>
		</div>
	);
}

export default App;
