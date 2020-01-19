import React from "react";
import style from "./recipe.module.css"

const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <div className={style.recipe}>
      <div className={style.content}>
        <h1 className={style.title}>{title}</h1>
        <img className={style.image} src={image} alt="" />
        <ol className={style.ingredientsList}>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        {/* <p>{calories}</p> */}
        <a href={url} className={style.recipeSource} target='blank'>Get Cooking Directions</a>
      </div>
    </div >
  );
}

export default Recipe;