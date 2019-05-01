import React, { Component } from "react";
import { matchPath, withRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import { slugify } from "../helpers";
import recipes from "../sample_data/recipes.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleUrlSearchString = this.handleUrlSearchString.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
  }

  handleUrlSearchString(event) {
    this.props.history.push("/" + event.target.value);
  }

  getRecipe() {
    const match = matchPath(this.props.location.pathname, {
      path: "/recipe/:searchString",
      exact: true
    });

    const searchString = match ? match.params.searchString : "";

    let recipe = recipes.results.filter(recipe => {
      const slugedTitle = slugify(recipe.title);
      return slugedTitle === searchString;
    });

    return recipe.shift();
  }

  getSearchString = () => {
    const match = matchPath(this.props.location.pathname, {
      path: "/:searchString",
      exact: true
    });

    return match ? match.params.searchString : "";
  };

  render() {
    return (
      <div className="App">
        <Navbar
          searchString={this.getSearchString}
          handleUrlSearchString={this.handleUrlSearchString}
        />
        <div className="container mt-10">
          <Route
            exact
            path="/"
            render={props => <Home {...props} recipes={recipes.results} />}
          />
          <Route
            exact
            path="/:searchString"
            render={props => <Home {...props} recipes={recipes.results} />}
          />
          <Route
            exact
            path="/recipe/:searchString"
            render={props => <RecipePage {...props} recipe={this.getRecipe} />}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
