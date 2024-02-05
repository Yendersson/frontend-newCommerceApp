import React, { useState } from "react";
import Auth from "./Auth";
import Register from "./Register";
import { useToken } from "../../hooks/useToken";
import { Link } from "react-router-dom";

const Login = ({ toggle }) => {
    const [register, setRegister] = useState(false);

    const {token, removeToken} = useToken();
    console.log(token);

    function closeToggle(e) {
        e.preventDefault();
        toggle();
    }

    function setState(e) {
        setRegister(e);
    }

    function renderizado() {
        if (register) return <Register toggle={(e) => setState(e)}></Register>
        if (token != "" && token.length>1) return <Logout logout={removeToken}/>;
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

export default Login;


const Logout = ({logout}) => {
    function logoutToken() {
        logout();
    }

    return (
            <div className="modal-container ">
                <Link to={"/profile"}><button className="btn-login" id="btn-perfil">Ver perfil</button></Link> 
                <button className="btn-register" id="cerrar-sesion" onClick={logoutToken}>Cerrar sesion</button>
            </div>
    )
}