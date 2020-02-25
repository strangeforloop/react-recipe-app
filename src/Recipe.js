import React from "react";
import style from "./recipe.module.css"

const Recipe = ({ title, calories, image, ingredients, url }) => {
  // const RecipesComponent = 
  return (
    <div className={style.recipe}>
      <div className={style.content}>
        <p className={style.title}>{title}</p>
        <div className={style.imageContent}>
          <img className={style.image} src={image} alt="" />
        </div>
        <ol className={style.ingredientsList}>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <a href={url} className={style.recipeSource} target='blank'>Get Cooking Directions</a>
      </div>
    </div >
  );
}

export default Recipe;