import React from "react";
import { useState, Component } from "react";



import Input from "./components/Input";
import "../../views/login/styles/LoginView.css";
import Checkbox from "./components/CheckBox";


const NewUser = () => {

    const [error, setError] = useState(false);
    const [errorTipo, setErrorTipo] = useState(false);
    const [client, setClient] = useState(false);
    const [provider, setProvider] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [cargo, setCargo] = useState("");


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
        if (name === "email") {
            setEmail(value);
        }
        if (name === "nombre") {
            setNombre(value);
        }
        if (name === "apellido") {
            setApellido(value);
        }

    }

    function handleSubmit() {
        //agrega al localStorage
        //console.log(localStorage.getItem("Usuarios"));
        
        let usuarios = JSON.parse(localStorage.getItem("Usuarios"));
        usuarios.push({
            nombre: nombre,
            Apellido: apellido,
            user: user,
            password: password,
            cargo: cargo,
            email: email
        });
        localStorage.setItem("Usuarios", JSON.stringify(usuarios));
        alert("Usuario creado exitosamente");


    }


    function checkChange(name, value) {
        if (name === "client") {
            setCargo("client");
        }
        if (name === "provider") {
            setCargo("provider");
        }
        if (name === "admin") {
            setCargo("admin");
        }
    }

    return (
        <div className="contenedor-login-view ancho">
            <h1 className="login-titulo" >Crea tu nuevo usuario</h1>
            <div className="Login-container">
                <div className="nombre-apellido">
                    <div>
                        <label>Nombre</label>
                        <Input
                            attribute={{
                                id: "Nombre",
                                type: "text",
                                placeholder: "Ingrese su Nombre",
                                className: "",
                                name: "Nombre",
                            }}
                            handleChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Apellido</label>
                        <Input
                            attribute={{
                                id: "Apellido",
                                type: "text",
                                placeholder: "Ingrese su Apellido",
                                className: "",
                                name: "Apellido",
                            }}
                            handleChange={handleChange}
                        />
                    </div>
                </div>
                <div className="nombre-apellido">
                    <div>
                        <label>Usuario</label>
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
                    </div>
                    <div>
                        <label>Contraseña</label>
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
                    </div>
                </div>
                <div>
                    <label className>correo</label>
                    <Input
                        attribute={{
                            id: "correo",
                            type: "email",
                            placeholder: "Ingrese su correo",
                            className: "",
                            name: "correo",
                        }}
                        handleChange={handleChange}
                    />
                </div>
                <div className="checks">
                    <Checkbox
                        tipo="provider"
                        handleChange={checkChange}
                    />
                    <Checkbox
                        tipo="client"
                        handleChange={checkChange}
                    />
                    <Checkbox
                        tipo="admin"
                        handleChange={checkChange}
                    />
                    {errorTipo &&
                        <label>Debe escorger Maximo 1 casilla</label>
                    }
                </div>
                <a href="/login" className="a">
                <button
                    className="btn-login"
                    onClick={handleSubmit}
                >Crear usuario</button>
                </a>
            </div>

        </div>
    );
}
export default NewUser;