import React from 'react';
import style from './Recipe.module.css';
import { Redirect } from 'react-router-dom';

const Recipe = (props) => {

    if (!props.newContent) {
        return <Redirect to="/recipes" />
    }
    return (
        <div className={style.mainContainer}>
            <div className={style.itemRecipes}>
                <RecipePresentasion newContent={props.newContent} />
                <RecipeInformation newContent={props.newContent} />
            </div>
        </div>
    )
}

const RecipePresentasion = ({ newContent }) => {
    return (
        <div className={style.partBrief}>
            <div className={style.titleRecipe}>
                <h2>{newContent.title}</h2>
            </div>
            <div className={style.photoRecipe}>
                <img src={newContent.urlPhoto} alt="recipePhoto" />
            </div>
        </div>
    )
}

const RecipeInformation = ({ newContent }) => {
    let i = 1, j = 1;
    return (
        <div className={style.information}>
            <div className={style.description}>
                <h3>Описание:</h3>
                <p>{newContent.description}</p>
            </div>
            <div className={style.ingredients}>
                <h3>Ингредиенты:</h3>
                <ul>
                    {newContent.Ingredients &&
                        newContent.Ingredients.map((ing, id) => {
                            return <li key={id}>{`${j++}. ${ing.nameOfProduct} - ${ing.amount} ${ing.type}`}
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className={style.instructions}>
                <h3>Пошаговое приготовление:</h3>
                {
                    newContent.instructions &&
                    newContent.instructions.map((ins, id) => {
                        return <div className={style.boxStep} key={id}>
                    <p className={style.step}>{`Шаг ${i++}`}</p>
                            <p>{ins.instructionsStep}</p>
                            {ins.photo && <div className={style.photoIns}><img src={ins.photo} alt="photoIns" /></div>}
                        </div>
                    })
                }
                <div className={style.thank}>
                    <p>Приятного аппетита!</p>
                </div>
            </div>
        </div>
    )
}


export default Recipe;