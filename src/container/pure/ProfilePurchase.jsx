import React from "react";
import { useFetch } from "../../hooks/useAxios";
import Spinner from "./Spinner";
import ProfilePurchaseContent from "./ProfilePurchaseContent";

const ProfilePurchase = () => {

    const { data, loader } = useFetch("http://localhost:18080/api/purchase/user");


    function renderizado() {
        if (loader) return (<Spinner />);
        return (
            <>
                {data.map((item)=> <ProfilePurchaseContent data={item.purchaseProduct}/>)}
            </>
        )
    }

    return renderizado();
}

export default ProfilePurchase;