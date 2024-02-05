import React from "react";

const ProfilePurchaseContent = ({data}) => {
    console.log(data)
    return(
            <>
                {data.map((item,index) => (
                    <div className="purchase-user">
                        <div>
                            <img src={`http://localhost:18080/update/${item.product.picture}`} alt="" />
                        </div>
                        <div>
                            <h3>{item.product.title}</h3>
                        </div>
                        <div>
                            <p>{item.product.current_price}</p>
                        </div>

                    </div>
                ))}
            </>
                
        )
}

export default ProfilePurchaseContent;