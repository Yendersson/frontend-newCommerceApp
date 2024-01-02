import React from "react";

const PaymentMethod = ({data}) => {

    return (
        <section className="steps">

            <div style={{width: "150px", height: "150px", background:"#000"}}>

            </div>
     
        <div className="box-container">
        {data.map((item,index) => 
        (
          <div className="box" key={index}>
            <img src={`http://localhost:18080/update/${item.image}`} alt="payment-method" />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>

        )
        )}
     
        </div>

      </section>

    )
}

export default PaymentMethod;