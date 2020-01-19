import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = '80756ccf';
  const APP_KEY = '72691f82f023817109d7620cc7d12c86';

  // const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  // const [counter, setCounter] = useState(0);

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    console.log('Effect has been run');
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <header className="header">
        <div className="content"> 
          <h1 className="app-title">Recipe Finder</h1>
          <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="input" value={search} onChange={updateSearch} placeholder="What are you craving?"/>
            <button className="search-button" type="submit">Search</button>
          </form>
        </div>
      </header>
      {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.url}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} 
            url={recipe.recipe.url}/>
        ))}
      </div>
    </div>
  );
}

export default App;
