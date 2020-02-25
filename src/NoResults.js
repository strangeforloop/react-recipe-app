import React from "react";
import style from "./recipe.module.css"

const NoResults = () => {
  return (
    <div className="messageToUser">
      <p className="noResultsMessage">Sorry, there are no results for your search. Please try another search.</p>
      <a className="errorImage" href="https://icons8.com">
        <img src="update.png" alt="Helping star doodle" width="600"/>
      </a>
    </div >
  );
}

export default NoResults;