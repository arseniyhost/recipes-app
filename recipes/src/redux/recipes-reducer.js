import { recipesAPI } from "../app/app";

const ADD_RECIPE = 'recipes/recipesReducer/ADD_RECIPE';
const SET_CURRENT_CONTENT = 'recipes/recipesReducer/SET_CURRENT_CONTENT';
const GET_RECIPES_SUCCSESS = 'recipes/recipesReducer/GET_RECIPES_SUCCSESS'


const InitState = {
    title: "Hello",
    recipes: [],
    recipeTargetContent: null
}

const recipesReducer = (state = InitState, action) => {
    switch (action.type) {

        case GET_RECIPES_SUCCSESS: {
            return {
                ...state, recipes: action.recipeSuccess
            }
        }

        case SET_CURRENT_CONTENT: {
            let mass = { ...state.recipes };
            return {
                ...state, recipeTargetContent: mass[action.recipeContent - 1]
            }
        }

        case ADD_RECIPE: {
            return {
                ...state, recipes: [...state.recipes, action.recipe]
            }
        }

        default:
            return state;
    }
}

export const addRecipe = (recipe) => ({ type: ADD_RECIPE, recipe });
export const setRecipeContent = (recipeContent) => ({ type: SET_CURRENT_CONTENT, recipeContent })
export const getRecipesSuccess = (recipeSuccess) => ({ type: GET_RECIPES_SUCCSESS, recipeSuccess })

export const getRecipeThunk = () => async dispatch => {
    let response = await recipesAPI.getRecipes();

    dispatch(getRecipesSuccess(response));
}

export const addRecipeThunk = (recipe) => async dispatch => {
    let response = await recipesAPI.createRecipe(recipe);
    dispatch(addRecipe(recipe));

    console.log(response.data.recipe);
}
 

export default recipesReducer;