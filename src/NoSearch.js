import React from "react";

const NoSearch = () => {
  return (
    <div className="messageToUser">
      <p className="noSearchMessage">Hey there! You didn't enter a search. Please enter a search into the search bar.</p>
      <a className="errorImage" href="https://icons8.com">
        <img src="search.png" alt="Helping star doodle" width="600" />
      </a>
    </div >
  );
}

export default NoSearch;