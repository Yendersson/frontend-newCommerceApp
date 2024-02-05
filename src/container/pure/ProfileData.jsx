import React from "react";
import { useFetch } from "../../hooks/useAxios";
import Spinner from "./Spinner"
import ProfileDataContent from "./ProfileDataContent";

const ProfileData = () => {

    const { data, loader } = useFetch("http://localhost:18080/api/user/1");

    function renderizado() {
        if (loader) return (<Spinner />);
        return (
            <>
                <ProfileDataContent data={data}/>
            </>
        )
    }

    return renderizado();
}

export default ProfileData;