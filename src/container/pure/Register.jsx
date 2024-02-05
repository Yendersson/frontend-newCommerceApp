import axios from "axios";

const Register = ({ toggle }) => {

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

export default Register;