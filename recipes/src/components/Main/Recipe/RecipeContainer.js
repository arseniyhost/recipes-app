import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux';
import { getRecipeThunk, setRecipeContent } from './../../../redux/recipes-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class RecipeContainer extends React.Component {
    componentWillMount() {
        this.props.getRecipeThunk();
        
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.onChangeRecipe(id);
    }


    onChangeRecipe = (recipeId) => {
        this.props.setRecipeContent(recipeId);
    }
    
    render() {
        return (
            <div>
                <Recipe key={1} newContent={this.props.newContent} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        newContent: state.recipesPage.recipeTargetContent,
    }
}

export default compose(
    connect(mapStateToProps, { getRecipeThunk, setRecipeContent }),
    withRouter
)(RecipeContainer);
