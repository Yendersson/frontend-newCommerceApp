import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { product_action } from "../services/actions/actionProducts";
import Spinner from "./pure/Spinner";
import { modifyKart } from "../services/actions/actionKart";
import { clientAxiosProduct } from "../services/client/axiosClient";

const selector = state => state.product
const Product = () => {
    const { id } = useParams();
    const state = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(_ => { 
        dispatch(clientAxiosProduct("/product/"+id, null, product_action));
    },[]);

    function addKart(id){
        const quantity = document.querySelector("#quantity").value;
        const product = {item: state.data[0], quantity};

        dispatch(modifyKart(product));
    }

    function renderizado() {
        if (state.loader) return (<Spinner></Spinner>);
        if (state.error.exist) return (<div>Ha ocurrido un error: {state.error.message}</div>);

        return (
            <section id="mainProducto">
                <div className="containerMainProducto">
                    {state.data[0].id == id &&
                    <div className="containerProducto">
                        <div className="divImagesProducto">
                            <div className="divImgProducto">
                                <img src={`http://localhost:18080/update/${state.data[0].picture}`} alt="#" className="imgPrincipalProducto" />
                            </div>
                            <div className="divGaleryProducto">
                                <div className="imgMinProducto">
                                    <img src="{{details.imgUrl.url1}}" alt="#" className="imgSrc1" />
                                </div>
                                <div className="imgMinProducto">
                                    <img src="{{details.imgUrl.url2}}" alt="#" className="imgSrc2" />
                                </div>
                                <div className="imgMinProducto">
                                    <img src="{{details.imgUrl.url3}}" alt="#" className="imgSrc3" />
                                </div>
                                <div className="imgMinProducto">
                                    <img src="{{details.imgUrl.url4}}" alt="#" className="imgSrc4" />
                                </div>
                            </div>
                        </div>
                        <div className="containerCompraProducto">
                            <div className="informacionCompraProducto">
                                <div className="nombreProducto">
                                    <p>{state.data[0].title} </p>
                                </div>
                                <div className="valorProducto">
                                    <p>descipcion: {state.data[0].description} </p>
                                </div>
                                <div className="descriptionProducto">
                                    <p>precio: {state.data[0].current_price} $ </p>
                                </div>
                            </div>
                            <div className="agregarEnCarritoProducto">
                                <div className="stock">
                                    <p>{state.data[0].stock > 0? `${state.data[0].stock} disponibles`: "AGOTADO"}</p>
                                </div>
                                <select name="quantity" id="quantity">
                                 
                                 {Array(state.data[0].stock).fill(null).map((item,index) => (<option key={index} value={index+1} >{index+1}</option>))}
                                </select>
                                <button className="agregaAlCarritoProducto" id="agregar" onClick={()=> addKart(id)}>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    }       
                </div>
            </section>
        )
    }

    return renderizado();
}

export default Product;