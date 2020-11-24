import React from 'react';
import s from './Login.module.css';
import { Field, reduxForm} from "redux-form";
import {Input, InputC} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
const maxLength15 = maxLengthCreator(30)

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field placeholder={'Email'} name={'email'}
                           component={Input} validate={[required, maxLength15]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'}
                           component={Input} validate={[required, maxLength15]}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'}
                           component={InputC}/> remember me
                </div>
                 { props.error &&  <div className={s.formSummaryError} >
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={s.all}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}
 const mapStateToProps=(state)=>({
     isAuth:state.authPage.isAuth
 })

export default connect(mapStateToProps, {login}) (Login)