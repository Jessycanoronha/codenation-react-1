import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../helpers";
import PropTypes from "prop-types";

const getHighlightedText = (text, higlight) => {
  let parts = text.split(new RegExp(`(${higlight})`, "gi"));
  return (
    <span>
      {parts.map((part, ind) =>
        part.toLowerCase() === higlight.toLowerCase() ? (
          <mark key={ind}>{part}</mark>
        ) : (
          part
        )
      )}
    </span>
  );
};

const RecipeItem = ({ ingredients, thumbnail, title, searchString }) => (
  <div className="col-sm-3 mt-4">
    <div className="RecipeItem">
      <Link to={`/recipe/${slugify(title)}`}>
        <div className="card">
          <img className="card-img-top img-fluid" src={thumbnail} alt="" />
          <div className="card-body">
            <h5 className="card-title">
              {getHighlightedText(title, searchString)}
            </h5>
            <p className="card-text">
              <strong>Ingredients: </strong>
              {getHighlightedText(ingredients, searchString)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

RecipeItem.propTypes = {
  ingredients: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  searchString: PropTypes.string
};

export default RecipeItem;
