import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>

        <img src='https://tehnot.com/wp-content/uploads/2017/03/viber001.png' />
        <div >
            { props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>LOG OUT</button></div>
                : <NavLink className={s.loginBlock} to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;