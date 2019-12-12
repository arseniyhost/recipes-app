import React, { useState } from 'react';
import style from './Recipes.module.css';
import { NavLink } from 'react-router-dom';
import { sortByCategory } from './../../../common/sorts/sortByCategort';
import ButtonBox from './../../../common/utils/ButtonBox';
import { Input } from '@material-ui/core';

const Recipes = ({ recipes, onChangeRecipe, category }) => {
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState("");


    let updateSearch = (e) => {
        setSearch(e.target.value.substr(0, 20));
    }

    let onChangeCategories = (smallCat) => {
        setCategories(smallCat);
    }

    let onCLearCategories = () => {
        setCategories("");

    }

    let temp = category;

    let filterRecipe = recipes.filter(
        (recipe) => {
            return recipe.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        }
    );
    return (
        <div>
            {
                temp === "Первые блюда" && <div>
                    <div className={style.search}>
                        <Input onChange={(e) => { updateSearch(e) }} type="text" value={search} placeholder="Search" />
                    </div>
                    <div className={style.recipes}>
                        {
                            filterRecipe.map(r => {
                                return sortByCategory(r, 'Первые блюда');
                            })
                        }
                    </div>
                </div>
            }
            {
                !temp && <div>
                    <div className={style.containerButtons}>
                        <div className={style.btnCategories}>
                            <ButtonBox variant={"contained"} text={"Первые блюда"} onClick={() => onChangeCategories("Первые блюда")} />
                            <ButtonBox variant={"contained"} text={"Вторые блюда"} onClick={() => onChangeCategories("Вторые блюда")} />
                            <ButtonBox variant={"contained"} text={"Салаты"} onClick={() => onChangeCategories("Салаты")} />
                            <ButtonBox variant={"contained"} text={"Закуски"} onClick={() => onChangeCategories("Закуски")} />
                        </div>
                        <div className={style.btnCategories}>
                            <ButtonBox variant={"contained"} text={"Десерты"} onClick={() => onChangeCategories("Десерты")} />
                            <ButtonBox variant={"contained"} text={"Выпечка"} onClick={() => onChangeCategories("Выпечка")} />
                            <ButtonBox variant={"contained"} text={"Соусы"} onClick={() => onChangeCategories("Соусы")} />
                            <ButtonBox variant={"contained"} text={"Напитки"} onClick={() => onChangeCategories("Напитки")} />
                        </div>
                        <div className={style.btnCategories}>
                            <ButtonBox color={"secondary"} variant={"contained"} text={"Очистить"} onClick={() => onCLearCategories("")} />
                        </div>
                    </div>
                    <div className={style.search}>
                        <Input onChange={(e) => { updateSearch(e) }} type="text" value={search} placeholder="Search" />
                    </div>
                    <div className={style.recipes}>
                        {
                            filterRecipe.map(r => {
                                if (categories === "Вторые блюда") {
                                    return sortByCategory(r, 'Вторые блюда', onChangeRecipe);
                                }
                                if (categories === "Первые блюда") {
                                    return sortByCategory(r, 'Первые блюда', onChangeRecipe);
                                }
                                if (categories === "Салаты") {
                                    return sortByCategory(r, 'Салаты', onChangeRecipe);
                                }
                                if (categories === "Десерты") {
                                    return sortByCategory(r, 'Десерты', onChangeRecipe);
                                }
                                if (categories === "Закуски") {
                                    return sortByCategory(r, 'Закуски', onChangeRecipe);
                                }
                                if (categories === "Выпечка") {
                                    return sortByCategory(r, 'Выпечка', onChangeRecipe);
                                }
                                if (categories === "Соусы") {
                                    return sortByCategory(r, 'Соусы', onChangeRecipe);
                                }
                                if (categories === "Напитки") {
                                    return sortByCategory(r, 'Напитки', onChangeRecipe);
                                }
                                else {
                                    return <div className={style.elementRecipe}>
                                        <div><img src={r.urlPhoto} alt="photoRecipe" /></div>
                                        <h3>{r.title}</h3>
                                        <div>
                                            <p><NavLink onClick={(e) => { onChangeRecipe(r.id) }} to={`/recipe/${r.id}`}>{r.description.substring(0, 20) + " . . ."}</NavLink></p>
                                        </div>
                                    </div>
                                }
                            })
                        }
                    </div>
                </div>
            }
            {
                temp === "Вторые блюда" && <div>
                    <div className={style.search}>
                        <Input onChange={(e) => { updateSearch(e) }} type="text" value={search} placeholder="Search" />
                    </div>
                    <div className={style.recipes}>
                        {
                            filterRecipe.map(r => {
                                return sortByCategory(r, 'Вторые блюда', onChangeRecipe);
                            })
                        }
                    </div>
                </div>
            }
            {
                temp === "Десерты" && <div>
                    <div className={style.search}>
                        <Input onChange={(e) => { updateSearch(e) }} type="text" value={search} placeholder="Search" />
                    </div>
                    <div className={style.recipes}>
                        {
                            filterRecipe.map(r => {
                                return sortByCategory(r, 'Десерты', onChangeRecipe);
                            })
                        }
                    </div>
                </div>
            }
            {
                temp === "Салаты" && <div>
                    <div className={style.search}>
                        <Input onChange={(e) => { updateSearch(e) }} type="text" value={search} placeholder="Search" />
                    </div>
                    <div className={style.recipes}>
                        {
                            filterRecipe.map(r => {
                                return sortByCategory(r, 'Салаты', onChangeRecipe);
                            })
                        }
                    </div>
                </div>
            }
            {
                temp === "Закуски" && <div>
                    <div className={style.search}>
                        <Input onChange={(e) => { updateSearch(e) }} type="text" value={search} placeholder="Search" />
                    </div>
                    <div className={style.recipes}>
                        {
                            filterRecipe.map(r => {
                                return sortByCategory(r, 'Закуски', onChangeRecipe);
                            })
                        }
                    </div>
                </div>
            }
            {
                temp === "Выпечка" && <div>
                    <div className={style.search}>
                        <Input onChange={(e) => { updateSearch(e) }} type="text" value={search} placeholder="Search" />
                    </div>
                    <div className={style.recipes}>
                        {
                            filterRecipe.map(r => {
                                return sortByCategory(r, 'Выпечка', onChangeRecipe);
                            })
                        }
                    </div>
                </div>
            }
            {
                temp === "Соусы" && <div>
                    <div className={style.search}>
                        <Input onChange={(e) => { updateSearch(e) }} type="text" value={search} placeholder="Search" />
                    </div>
                    <div className={style.recipes}>
                        {
                            filterRecipe.map(r => {
                                return sortByCategory(r, 'Соусы', onChangeRecipe);
                            })
                        }
                    </div>
                </div>
            }
            {
                temp === "Напитки" && <div>
                    <div className={style.search}>
                        <Input onChange={(e) => { updateSearch(e) }} type="text" value={search} placeholder="Search" />
                    </div>
                    <div className={style.recipes}>
                        {
                            filterRecipe.map(r => {
                                return sortByCategory(r, 'Напитки', onChangeRecipe);
                            })
                        }
                    </div>
                </div>
            }
        </div >
    )

}

export default Recipes;