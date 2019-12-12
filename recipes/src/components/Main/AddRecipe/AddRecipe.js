import React, { useState } from 'react';
import style from './AddRecipe.module.css';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { FieldInput, FieldTextarea, FieldSelect } from '../../../common/utils/utils';
import { Redirect } from 'react-router-dom';
import { require, maxValues, minValues } from '../../../common/validates/validates';
import { renderIngredients } from '../../../common/utils/renderIngredients';
import { renderInstructions } from '../../../common/utils/renderInstructions';
import ButtonBox from './../../../common/utils/ButtonBox';



const min = minValues(2);


const FieldArraysForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <form className={style.formRecipe} onSubmit={handleSubmit}>
            <div className={style.recipeContainer}>
                <Field
                    name="title"
                    type="text"
                    component={FieldInput}
                    label="Название блюда:"
                    validate={[require, min]}
                />
            </div>
            <div className={style.describeInfo}>
                <div>
                    <Field
                        name="urlPhoto"
                        type="text"
                        component={FieldInput}
                        label="Главное фото:"
                        placeholder="photo"
                        validate={[require, min]}
                    />
                </div>
                {/* <Field name="category" validate={[require]} component="select">
                    <option value="">Select categories</option>
                    {categories.map(cat => {
                        return <option value={cat} key={cat}>{cat}</option>
                    })}
                </Field> */}
                <div>
                    <Field label="Катергория:" name="category" validate={[require]} component={FieldSelect} />
                </div>
            </div>
            <div className={style.recipeContainer}>
                <Field
                    name="description"
                    type="text"
                    component={FieldTextarea}
                    label="Описание:"
                    validate={[require, min]}
                />
            </div>
            <div className={style.arrayIng}>
                <FieldArray name="ingredients" component={renderIngredients} />
            </div>
            <div className={style.instructionsBox}>
                <FieldArray name="instructions" component={renderInstructions} />
            </div>
            <div className={style.recipeContainerBtn}>
                <ButtonBox color={"secondary"} variant={"contained"} className={style.btnSend} type="submit" disabled={submitting} text={"Выложить рецепт"} />
                <ButtonBox type="button" disabled={pristine || submitting} onClick={reset} text={"Очистить"} />
            </div>
        </form>
    )
}

const AddRecipe = (props) => {

    let [subButton, setSubButton] = useState(false);

    let onSubmit = (formData) => {
        let recipeData = {
            id: props.recipesId.length + 1,
            title: formData.title,
            urlPhoto: formData.urlPhoto,
            description: formData.description,
            category: formData.category,
            instructions: formData.instructions,
            Ingredients: formData.ingredients
        }
        props.addRecipe(recipeData);
        setSubButton(true);
        console.log(recipeData);
    }

    if (subButton) {
        return <Redirect to="/recipes" />
    }

    return (
        <div className={style.addRecipeForm}>
            <h2>Новый рецепт</h2>
            <FormRedux onSubmit={onSubmit} />
        </div>
    )
}

const FormRedux = reduxForm({
    form: 'recipes',
})(FieldArraysForm);

export default AddRecipe;