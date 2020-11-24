import React from 'react';
import s from './Login.module.css';
import {reduxForm} from "redux-form";
import {createField, Input, InputC} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
const maxLength20 = maxLengthCreator(20)

const LoginForm = ({handleSubmit, error}) => {
    return (
            <form onSubmit={handleSubmit} >
                {createField('Email','email', Input, [required, maxLength20]) }
                {createField('Password','password', Input, [required, maxLength20]) }
                {createField(null ,'rememberMe', InputC,  [],
                    {type: 'checkbox'}, 'rememberMe') }
                 { error &&  <div className={s.formSummaryError} >
                    {error}
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