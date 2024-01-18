import React from "react";
import ProfileMenu from "./pure/ProfileMenu";
import { Outlet } from "react-router-dom";

const Profile = () => {

    return (
        <div className="flex-datos">
            <ProfileMenu/>

            <Outlet/>
        </div>
    )
}

export default Profile;