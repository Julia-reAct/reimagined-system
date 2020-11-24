import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <div>
            <header className={s.header}>
                <img src='https://i.pinimg.com/originals/45/df/e7/45dfe75af9ab4e1de64686e926ef38b5.png'/>
                <div className={s.loginBlock}>
                    {props.isAuth ?
                        <div>{props.login} <button className={s.buton} onClick={props.loginOut}>log out</button> </div>
                        :<NavLink to={'/login'}>Login</NavLink>}

                </div>
            </header>
        </div>
    );
}

export default Header;