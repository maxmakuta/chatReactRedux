import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../img/wert.png'

const Header = (props) => {
    return <header className={s.header}>

        <img src={logo} />
        <div >
            { props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>LOG OUT</button></div>
                : <NavLink className={s.loginBlock} to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;