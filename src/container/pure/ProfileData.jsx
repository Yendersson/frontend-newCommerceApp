import React from "react";
import { useFetch } from "../../hooks/useAxios";
import Spinner from "./Spinner"

const ProfileData = () => {

    const { data, loader } = useFetch("http://localhost:18080/api/user/1");

    function renderizado() {
        if (loader) return (<Spinner />);
        return (
            <div>
                {data.id}
                <br />
                {data.username}
            </div>
        )
    }

    return renderizado();
}

export default ProfileData;