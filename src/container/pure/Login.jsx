import axios from "axios";
import React, { useState } from "react";

const Login = ({ toggle }) => {
    const [register, setRegister] = useState(false);

    function closeToggle(e) {
        e.preventDefault();
        toggle();
    }

    function setState(e) {
        setRegister(e);
    }

    function renderizado() {
        if (register) return <Register toggle={(e) => setState(e)}></Register>
        return <Auth toggle={(e) => setState(e)}></Auth>;
    }

    return (
        <div className="modal">
            <div className="modal-container modal-show">
                <img src="/images/img/protofinal (4).png" alt="" />
                {renderizado()}
                <a id="close" onClick={(e) => closeToggle(e)}>Cerrar</a>
            </div>
        </div>
    )
}

export const Register = ({ toggle }) => {

    function setState() {
        toggle(false);
    }

    async function updateUser() {
        const form = document.querySelector("#form-register");
        form.addEventListener("submit", (e) => e.preventDefault());

        const body = {
            username: form.username.value,
            email: form.email.value,
            password: form.password.value
        };

        try {
            const response = await axios.post("http://localhost:18080/api/register",
                JSON.stringify(body),
                { headers: { "Content-Type": "application/json" } }
            );
            console.log(response);
        } catch (error) {
            alert("Mensaje de error: " + error);
        }
    }



    return (
        <>
            <form id="form-register">
                <div className="form-inicio">
                    <label htmlFor="">Nombre:</label>
                    <input type="text" name="username" id="username" placeholder="nombre de usuario" />
                    <label htmlFor="">Correo:</label>
                    <input type="email" name="email" id="email" placeholder="Mail" />
                    <label htmlFor="">Contraseña:</label>
                    <input type="password" name="password" id="passwordR" placeholder="******" />
                    <button className="btn-login" id="btn-register" onClick={updateUser}>Registarse</button>
                </div>
            </form>
            <button className="btn-register" id="login" onClick={setState} >Ya tienes cuenta?</button>
        </>
    )
}

export const Auth = ({ toggle }) => {

    const [stateAuth, setSateAuth] = useState("");

    async function authenticate() {
        const form = document.querySelector("#form");
        form.addEventListener("submit", (e) => e.preventDefault());

        const body = {
            email: form.email.value,
            password: form.password.value
        };

        try {
            const response = await axios.post("http://localhost:18080/api/auth",
                JSON.stringify(body),
                { headers: { "Content-Type": "application/json" } }
            );
            console.log(response);
            setSateAuth(response.data.message)
            localStorage.setItem("token", JSON.stringify(response.data.data));
        } catch (error) {
            alert("Mensaje de error: " + error);
        }


    }

    function setState() {
        toggle(true);
    }
    return (
        <>
            <form action="" id="form">
                <div className="form-inicio">
                    <label htmlFor="">Correo:</label>
                    <input type="email" name="email" id="email" placeholder="Mail" />
                    <label htmlFor="">Contraseña:</label>
                    <input type="password" name="password" id="password" placeholder="******" />
                    <button className="btn-login" id="btn-login" onClick={authenticate}>Iniciar Sesion</button>
                    <span id="alerta" style={{ color: "red", textAlign: "center" }}>{stateAuth}</span>
                </div>
            </form>
            <button className="btn-register" id="register" onClick={setState}>Registrate</button>
        </>
    )
}

export default Login;


const Logout = () => {
    return (
        <section className="modal-logeado">
            <div className="modal-container modal-show">
                <button className="btn-login" id="btn-perfil">Ver perfil</button>
                <button className="btn-register" id="cerrar-sesion">Cerrar sesion</button>
            </div>
        </section>
    )
}