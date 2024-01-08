import React, { useEffect, useState } from "react";
import MpForm from "./MpForm";
import { useDispatch, useSelector } from "react-redux";

const selector = state => state.kart;
const selector2 = state => state.product;

const Kart = () => {
  const state = useSelector(selector);
  const products = useSelector(selector2);

  const dispatch = useDispatch();

  useEffect(_=>{

  },[])

  const [payForm, setPayform] = useState(false);

    function modalPayment(){
        setPayform(!payForm);
    }

    function getResponseModalPayment() {
      modalPayment();
    }

    return (
        <div style={{margin:"auto", maxWidth:"1000px"}}>

<div className="headerCarrito">
      <h1 id="cart-title"> Bienvenido a tu carrito </h1>
      <h2></h2>
    </div>
    <div className="containerCarrito">
      <div className="cart-column">
          <img src="/images/icons/carrito.png" className="imgCarrito" />
          <h3 id="productos">producto</h3>
          <h3 id="cantidades">cantidad</h3>
          <h3 id="precios">precio</h3>
          
     
                  <button type="button"> <img src="images/icons/basura.png" width="40" height="40" />
                  </button>
     
          
      </div>


      
        {state.items.map((item,index) => 
        (
          <div id="prueba-producto" key={index}>
          <img src={`http://localhost:18080/update/${item.item.picture}`} className="imgCarrito" />
          <h3 id="producto1">{item.item.title}</h3>
          <h3 id="cantidad1">{item.quantity}</h3>
          <h3 id="precio1">{item.item.current_price*item.quantity}.0</h3>
          </div>
          
        )
        )}
     
      <div id="final">
          <button className="boton1 btnCarrito">seguir comprando</button>
          <h2 id="precio-total">total:  $</h2>
          <button className="boton2 btnCarrito" id="compra" onClick={modalPayment}>continuar</button>
          <button type="button" > <img src="images/icons/basura.png" className="eliminar"  />
          </button>
      </div>
  </div>

  {payForm && (
    <MpForm closeModal={getResponseModalPayment} total={2000.0}></MpForm>
  )}
</div>

)
}

export default Kart;