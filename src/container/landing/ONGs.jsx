import React from "react";

const ONGs = ({data, type}) => {

    function renderizado() {
        if (type === "CARD") {
            return (
            <section className="section organization">
                <div className="container">
                  <h2 className="h2 section-title">Conocé las organizaciones</h2>
                  <ul className="has-scrollbar">

                    {data.map((item,index)=> (
                        <li className="home-card-item" key={index}>
                        <div className="org-card">
                            <div className="card-header">
                            <img src={`http://localhost:18080/update/${item.logo}`} width="90" height="90" loading="lazy"
                                alt="UNICEF" className="card-avatar"/>
                            </div>
                            <blockquote className="card-text">
                            {item.about}
                            </blockquote>
                            <h3 className="card-title">{item.name}</h3>
                            <a href={item.url} className="btn btn-primary" target="_blank">
                            <span>VISITAR</span>
                            </a>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </section>
            )
        }

        return (
            <section className="section partner">
                <div className="container">
                    <p className="section-subtitle"> Colaborá </p>
                    <h2 className="h2 section-title">¿A quienes ayudamos?</h2>
                    <ul className="has-scrollbar">
                        {data.map((item,index)=>
                            (
                                <li className="partner-organization" key={index}>
                                <figure className="partner-logo">
                                    <img src={`http://localhost:18080/update/${item.logo}`} width="132" height="134" loading="lazy" alt="Partner logo"/>
                                </figure>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </section>
        )
    }
    return(
        renderizado()
    )
}

export default ONGs;