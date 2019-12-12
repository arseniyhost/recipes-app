import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <NavLink to="/" >Logo</NavLink>
            </div>
            <div className={style.menu}>
                <ul>
                    <li>
                        <NavLink activeClassName={style.active} to="/home">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.active} to="/recipes">Рецепты</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.active} to="/addrecipe">Добавить рецепт</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.active} to="/news">Новости</NavLink>
                    </li>
                </ul>
                <div className={style.menuLogin}>
                    <ul>
                        <li>
                            <NavLink activeClassName={style.active} to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
