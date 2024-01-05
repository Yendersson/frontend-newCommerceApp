import React from "react";

const Profile = () => {
    return (
        <div className="contenido-perfil">

            <div className="contenido-texto">
                <h1 ></h1>
                <hr />

                <h2 style={{ textAlign: "center" }}>Mis datos</h2>
                <div className="flex-datos">

                    <p>Usuario:
                    </p>
                    <p></p>
                    <p>
                        Modificar
                    </p>
                </div>

                <div className="flex-datos">

                    <p>
                        Correo:
                    </p>

                    <p>

                    </p>

                    <p>Modificar</p>

                </div>
                <p>
                    fecha de creacion:
                </p>
                <hr />
                <h2 style={{ textAlign: "center" }}>Mis compras</h2>

            </div>


        </div>
    )
}

export default Profile;