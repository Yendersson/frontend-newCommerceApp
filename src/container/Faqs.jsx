import React from "react";

const Faqs = () => {

    function dropDown(e) {
        console.log(e);
    }

    return (
        <div className="faq-container">
            <div className="row">
                <li className="footer-nav-item">
                    <a href="./index.html" className="footer-nav-link">Volver al Inicio</a>

                </li>
                <div className="container-faq">
                    <div className="title-faq">
                        <h3>Preguntas Frecuentes</h3>
                    </div>

                    <div className="item-faq">
                        <div className="question">
                            <h3>¿Puedo elegir la ONG a la cual quiero ayudar con la compra realizada?.<span>P</span></h3>
                            <div className="more"><i onClick={(e) => dropDown(e)}>+</i></div>
                        </div>
                        <div className="answer">
                            <p> Sí, al momento de hacer click en pagar, aparecerán  en forma de lista las distintas organizaciones,
                                de las cuales tendrás la opción  de elegir de forma libre y voluntaria la ONG que quieres ayudar con tu compra..<span><i>R</i></span></p>

                        </div>
                    </div>

                    <div className="item-faq">
                        <div className="question">
                            <h3>¿Cuál es el porcentaje de las ventas que van a las ONGs?. ¿Es por cada compra o unidad de
                                artículo?.<span>P</span></h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className="answer">
                            <p> El porcentaje es un acuerdo fijo del 10% del valor de cada artículo, vendido  a traves de
                                la plataforma sin importar limite de cantidad, como resultado con la compra de dos o mas
                                artículos tendrás la opción  de elegir a más de una ONG.<span><i>R</i></span></p>

                        </div>
                    </div>

                    <div className="item-faq">
                        <div className="question">
                            <h3>¿Cuáles son los artículos que puedo vender en la página?.<span>P</span></h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className="answer">
                            <p>Puede ser cualquier artículo nuevo o usado que estén en buenas condiciónes, en la
                                sección de vender encontrás  las distintas  categorias  en donde podrás ofrecer
                                ese producto que tenes en tu casa  y lo quieras vender. .<span><i>R</i></span></p>

                        </div>
                    </div>

                    <div className="item-faq">
                        <div className="question">
                            <h3>¿Cómo puedo colaborar de manera directa con la página?.<span>P</span></h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className="answer">
                            <p> En caso de querer hacer una donación directa a alguna de las ONGs presentes, en la plataforma te ofrecemos
                                un contaco directo con la organización, pero si es en caso de colaborar con nosotros  ponte en contacto de forma
                                directa a traves de la página..<span><i>R</i></span></p>

                        </div>
                    </div>
                    <div className="item-faq">
                        <div className="question">
                            <h3>¿Cuáles son los medios de pagos ?.<span>P</span></h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className="answer">
                            <p>El pago puede ser realizado en efectivo a través de pago fácil, con tarjeta de débito, tarjeta
                                de crédito o mercado pago, cada uno de estos medios contienen promociones diferentes, estar atentos a las publicaciones
                                los cuales tendrán  la información suficiciente de los metodos de pago.<span><i>R</i></span></p>

                        </div>
                    </div>

                    <div className="item-faq">
                        <div className="question">
                            <h3>¿Cómo funciona la idea de  ayudar a través de la reutilización y generar dinero al mismo tiempo?.<span>P</span></h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className="answer">
                            <p>Esta idea se fomenta en ayudarse unos a otros  a través de la reutilización de algunos artículos encontrados
                                en deshuso y que otra persona lo este necesitando, de esa menera ganando un extra por eso que no usas, pagango
                                lo justo por eso que necesitas, estamos ayudando a más de 1o personas por cada producto vendido  en todo el mundo,
                                nuestra plataforma se ajusta a la necesidad de nuestros clientes y les ofrecemos la mejor experiencia  de sastifacción.<span><i>R</i></span></p>


                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Faqs;