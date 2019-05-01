import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = (
  props,
  {
    recipes = props.recipes,
    searchString = props.match.params.searchString || ""
  }
) => {
  
  const filteredList = recipes.filter(
    recipe =>
      recipe.title.toLowerCase().includes(searchString.toLowerCase()) ||
      recipe.ingredients.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <div className="row">
      {filteredList.length !== 0 ? (
        filteredList.map((recipe, ind) => (
          <RecipeItem
            key={ind}
            ingredients={recipe.ingredients}
            thumbnail={recipe.thumbnail}
            title={recipe.title}
            searchString={searchString}
          />
        ))
      ) : (
        <h1>No Results to show</h1>
      )}
    </div>
  );
};

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
