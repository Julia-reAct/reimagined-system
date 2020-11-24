import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Human from "./Human/Human";

const Navbar = (props) => {
    let human =props.state.human.map(p => <Human key={p.id} id={p.id} name={p.name} avatar={p.avatar}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/people" activeClassName={s.active}>People</NavLink>
            </div>
            <div>
                <div className={s.friends}>Friends</div>
                {human}
            </div>
        </nav>
    );
}

export default Navbar;
