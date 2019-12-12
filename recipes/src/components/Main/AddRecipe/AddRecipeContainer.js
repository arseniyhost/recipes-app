import React from 'react';
import AddRecipe from './AddRecipe';
import { connect } from 'react-redux';
import { addRecipeThunk, getRecipeThunk } from './../../../redux/recipes-reducer';

class AddRecipeContainer extends React.Component {
    componentDidMount() {
        this.props.getRecipeThunk();
    }

    render() {
        return (
            <div>
                <AddRecipe addRecipe={this.props.addRecipeThunk} recipesId={this.props.recipesId} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        recipesId: state.recipesPage.recipes
    }
}

export default connect(mapStateToProps, { addRecipeThunk, getRecipeThunk })(AddRecipeContainer);