import React from "react";
import PropTypes from "prop-types";

const RecipePage = ({ recipe }) => {
  return recipe ? (
    <div>
      <img className="card-img-top img-fluid" src={recipe.thumbnail} alt="" />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text">
          <strong>Ingredients: </strong>
          {recipe.ingredients}
        </p>
      </div>
    </div>
  ) : (
    <h1>Recipe not found</h1>
  );
};
RecipePage.propTypes = {
  recipe: PropTypes.func
};

export default RecipePage;
