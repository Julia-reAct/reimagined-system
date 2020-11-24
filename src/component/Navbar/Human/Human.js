import React from 'react';
import s from './Human.module.css';
import {NavLink} from "react-router-dom";

let Human = (props)=>{
    let path = '/profile/' + props.id;
    return(
        <div>
           <NavLink to={path}> <img className={s.avatar} src={props.avatar}/></NavLink>
            <span className={s.nik}>{props.name}</span>
        </div>
    )
}
export default Human;