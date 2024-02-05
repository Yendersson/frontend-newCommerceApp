import { useAuth } from "../../hooks/useToken.js";

const Auth = ({ toggle }) => {

    const {authenticate, status} = useAuth()

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
                    <span id="alerta" style={{ color: "red", textAlign: "center" }}>{status}</span>
                </div>
            </form>
            <button className="btn-register" id="register" onClick={setState}>Registrate</button>
        </>
    )
}

export default Auth;
