import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/FopmsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import s from './Login.module.css';

const maxLength20 = maxLengthCreator(20)
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} name={"email"} component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={Input} validate={[required, maxLength20]}
                       type={"password"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required, maxLength20]}/>remember
                me
            </div>
            {props.error && <div className={s.formControlError}>{props.error}</div>}
            <div>
                <button> Login</button>
            </div>
        </form>


    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)