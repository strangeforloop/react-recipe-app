import React, { setState, useState } from "react"
import Recipe from './Recipe'
import style from './recipe.module.css'

const App = () => {
  const APP_ID = '80756ccf';
  const APP_KEY = '72691f82f023817109d7620cc7d12c86';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    console.log('Effect has been run');
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const reponse = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    setRecipes(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="input" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map((recipe) => (
        <div className="recipes">
          <Recipe
            title={recipe.recipe.title}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
