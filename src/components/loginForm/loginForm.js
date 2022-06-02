import React, { useState } from "react";


import Input from "./components/Input";
import "../../views/login/styles/LoginView.css";
import { Link } from "react-router-dom";

const LoginForm = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    function handleChange(name, value) {
        if (name === "user") {
            setUser(value);
        } else if (name === "password") {
            if (value.length < 5 & value.length > 0) {
                setError(true);
            } else {
                setError(false);
                setPassword(value);
            }
        }
    }

    function handleSubmit() {
        //Si el localStorage Usuarios no existe, lo crea
        if (!localStorage.getItem("Usuarios")) {
            localStorage.setItem("Usuarios", JSON.stringify([{
                nombre: "Rafael",
                Apellido: "Velandia",
                user: "rafaelv",
                password: "123456",
                cargo: "admin",
                email: "ravelandia@uninorte.edu.co"
            },{
                nombre:"Issa",
                Apellido:"Dovale",
                user:"issad",
                password:"123456",
                cargo:"provider",
                email:"idovale@uninorte.edu.co"
            },{
                nombre:"Jesus",
                Apellido:"Lozano",
                user:"jesusl",
                password:"123456",
                cargo:"provider",
                email:"jlozano@uninorte.edu.co"
            },{
                nombre:"Juan",
                Apellido:"Perez",
                user:"juanp",
                password:"123456",
                cargo:"provider",
                email:"jperez@uninorte.edu.co"
            }
            ]));
            handleSubmit();
        }else{
            //Si el localStorage Usuarios existe, lo lee
            const usuarios = JSON.parse(localStorage.getItem("Usuarios"));
            //Si el usuario y contraseña son correctos, lo redirige a la vista de productos
            if(usuarios.filter(usuario => usuario.user === user && usuario.password === password).length > 0){
                window.location.href = "/";
            }else{
                //Si el usuario y contraseña son incorrectos, muestra un mensaje de error
                alert("Usuario o contraseña incorrectos");
            }
        }
    }

    return (
        <div className="Login-container">
            
            <label className="label-text">Usuario</label>
            <Input
                
                attribute={{
                    id: "user",
                    type: "text",
                    placeholder: "Ingrese su usuario",
                    className: "",
                    name: "user",
                }}
                handleChange={handleChange}
            />
            <label className="label-text">Contraseña</label>
            <Input
                
                attribute={{
                    id: "password",
                    type: "password",
                    placeholder: "Ingrese su contraseña",
                    name: "password",
                }}
                handleChange={handleChange}
                param={error}
            />
            {error &&
                <label className="label-error">La contraseña de tener minimo 6 caracteres</label>
            }
            <button
                className="btn-login"
                onClick={handleSubmit}
            >Ingresar</button>
            <div className="btn-text">
                <label>¿No tienes una cuenta?</label>
                <Link to="/new-user" className="link">Create una</Link>
            </div>
        </div>
    );
};
export default LoginForm;