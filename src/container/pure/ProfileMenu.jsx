import React from "react";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
    return (
        <div className="sidebar">
            <nav>
                <ul>
                    <li> <Link to={"/profile"}>Mis Datos</Link></li>
                    <li> <Link to={"/profile/purchase"}>Mis Compras</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default ProfileMenu;