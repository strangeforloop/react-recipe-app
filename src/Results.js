import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import NoSearch from './NoSearch';
import NoResults from './NoResults';
import './App.css';

const App = () => {
  const APP_ID = '80756ccf';
  const APP_KEY = '72691f82f023817109d7620cc7d12c86';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [loading, setLoading] = useState(true);
  // const [results, setResults] = useState({});

  useEffect(() => {
    console.log('initial load');
    setQuery('chicken');
  }, []);

  useEffect(() => {
    console.log('Effect has been run');
    // getRecipes();
  }, [query]);

  const getRecipes = async () => {
    console.log('getting recipes');
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    // console.log('data.hits.length: ');
    // console.log('data: ', data);
    // console.log('hits', data.hits);
    setRecipes(data.hits);
    setLoading(false);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    // setResults(recipes);
    // console.log('results variable: ', results);
  }

  return (
    <div className="App">
      <header className="header">
        <div className="content">
          <h1 className="app-title">Recipe Finder</h1>
          <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="input" value={search} onChange={updateSearch} placeholder="What are you craving?" />
            <button className="search-button" type="submit">Search</button>
          </form>
        </div>
      </header>
      {

        (query === "") ? <NoSearch /> : (recipes.length === 0) ? <NoResults /> :
          <main className="container">
            <p className="results-message">Search results for "{query}":</p>
            <div className="recipes">
              {recipes.map((recipe) => (
                <Recipe
                  key={recipe.recipe.url}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                  url={recipe.recipe.url} />
              ))}
            </div>
          </main>
      }
    </div>
  );
}

export default App;


// conditional rendering
