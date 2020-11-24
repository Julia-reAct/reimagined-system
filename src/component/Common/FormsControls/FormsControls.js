import React from "react";
import s from './FormsControls.module.css'

const FormControl =(props) =>{
    const hasError =props.meta.touched && props.meta.error
    return (
        <div id={s.form} className={ hasError ? s.error:''}>
            {props.children}
            <div>
                {hasError && <span>{props.meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    return<FormControl {...props}><textarea  {...props.input} /></FormControl>
}
export const Input  = (props) => {
    return<FormControl {...props}><input  {...props.input} /></FormControl>
}
export const InputC  = (props) => {
    return(
        <FormControl {...props}>
            <input type={'checkbox'}  {...props.input} />
        </FormControl>
    )
}