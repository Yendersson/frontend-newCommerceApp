import React, { useEffect } from "react";
import Category from "./landing/Category";
import Banner from "./landing/Banner";
import ONGs from "./landing/ONGs";
import PaymentMethod from "./landing/PaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import { landing_action } from "../services/actions/actionLanding";
import Spinner from "./pure/Spinner";
import { clientAxiosProduct } from "../services/client/axiosClient";

const selector = state => state.landing;

const Home = () => {

    const state = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(_ => {
        dispatch(clientAxiosProduct("/landing/active", null, landing_action));
    }, [])

    function renderizado() {
        if (state.loader) return (<Spinner></Spinner>);
        if (state.error.exist) return (<div>Ha ocurrido un error: {state.error.message}</div>);

        return (
            <>
                <Banner data={state.data[0]["banner"]}></Banner>
                {state.data[0].showOngs && (
                    <>
                        <ONGs data={state.data[0]["ongs"]}></ONGs>
                        <ONGs type={"CARD"} data={state.data[0]["ongs"]}></ONGs>
                    </>
                )}

                <Category></Category>
                {state.data[0].showPayments && <PaymentMethod data={state.data[0]["payments"]}></PaymentMethod>}
            </>
        )
    }
    return (
        renderizado()

    )
}

export default Home;