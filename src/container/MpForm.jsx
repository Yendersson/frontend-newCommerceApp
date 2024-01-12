import React, { useEffect, useState } from "react";
import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";

initMercadoPago("TEST-e687118a-c544-4ece-9005-36d6b04cd62a", { locale: 'es-AR' });

const MpForm = ({closeModal, total, items}) => {

  function modalPayment() {
    closeModal();
  }

  const initialization = {
    amount: total,
  };

  function orderObj(items){
    const itemsOrder = [];
    
    items.forEach(item => {
      let obj= {
        id: item.item.id,
        title: item.item.title,
        description: item.item.description,
        category_id: item.item.category.title,
        quantity: item.quantity,
        unit_price: item.item.current_price,
        type: item.item.category.title,
      }

      itemsOrder.push(obj);
    })

    return itemsOrder;
  }

  const additional_info ={
    "items": orderObj(items),
    "payer": {
        "first_name": "Test",
        "last_name": "Test",
        "phone": {
            "area_code": 11,
            "number": "987654321"
        },
        "address": {
            "street_number": null
        }
    },
};
  const onSubmit = async (formData) => {
    const data = {...formData, additional_info};
    return new Promise((resolve, reject) => {
      fetch('http://localhost:18080/MpPayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(resp => resp.json())
        .then(data => {
          resolve(data);
          alert(data.status);
          if (data.status === 'approved') localStorage.setItem("items",JSON.stringify([]));
          
        })
        .catch(error => {
          reject();
          console.log(error)
        })
    });
  };

  const onError = async (error) => {
    alert("Ha ocurrido un error: "+ error);
    console.log(error);
  };

  const onReady = async () => {
    console.log("ready")
  };

  function renderizado() {
    return (
      <div className="Pago-carrito-carrito show">
        <div className="popop-carrito">
          <div className="contenedor-carrito">
            <CardPayment
              initialization={initialization}
              onSubmit={onSubmit}
              onReady={onReady}
              onError={onError}
            />
            <div>
              <a onClick={modalPayment} id="cerrar">cerrar</a>
            </div>
          </div>
        </div >
      </div >
    )
  }

  return renderizado();
}

export default MpForm