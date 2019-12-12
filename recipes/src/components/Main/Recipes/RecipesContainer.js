import React  from 'react';
import Recipes from './Recipes';
import { getRecipes } from '../../../redux/selectors/selectors';
import { connect } from 'react-redux';
import { setRecipeContent, getRecipeThunk } from './../../../redux/recipes-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';


class RecipesContainer extends React.Component {

    componentDidMount() {
        this.props.getRecipeThunk();
    }

    render() {
        let onChangeRecipe = (recipeId) => {
            this.props.setRecipeContent(recipeId);
        }

        let cater = this.props.match.params.category;

        return (
            <Recipes
                recipes={this.props.recipes}
                onChangeRecipe={onChangeRecipe}
                category={cater}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        recipes: getRecipes(state)
    }
}

export default compose(
    connect(mapStateToProps, { setRecipeContent, getRecipeThunk }),
    withRouter
)(RecipesContainer);