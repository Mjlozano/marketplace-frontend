import React from "react";
import { Link } from "react-router-dom";

import LoginForm from "../../components/loginForm/loginForm";
import "./styles/LoginView.css";

const LoginView = () => {
    return (
        <div className="contenedor-login-view">
            <h1 className="login-titulo">¡Bienvenido!</h1>
            <LoginForm/>
        </div>
    );
};

export default LoginView;