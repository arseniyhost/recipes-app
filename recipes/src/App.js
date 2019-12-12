import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import Home from './components/Main/Home/Home';
import News from './components/Main/News/News';
import Login from './components/Main/Login/Login';
import Footer from './components/Footer/Footer';
import RecipesContainer from './components/Main/Recipes/RecipesContainer';
import AddRecipeContainer from './components/Main/AddRecipe/AddRecipeContainer';
import RecipeContainer from './components/Main/Recipe/RecipeContainer';

function App() {
  return (
    <div className="wrapper-container">
      <header>
        <Header />
      </header>
      <main>
        <Route path="/home" render={() => <Home />} />
        <Route path="/recipes/:category?" render={() => <RecipesContainer />} />
        <Route path="/addrecipe" render={() => <AddRecipeContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/recipe/:id?" render={() => <RecipeContainer />} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
