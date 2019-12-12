import { createStore, combineReducers, applyMiddleware } from 'redux';
import recipesReducer from './recipes-reducer';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    recipesPage: recipesReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;