import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { category_action } from "../services/actions/actionCategory";
import NavCategory from "./pure/navCategory";
import { subCategory_action } from "../services/actions/actionSubcategory";
import Search from "./pure/Search";
import Login from "./pure/Login";
import NavCategoryMobile from "./pure/mobile/NavCategoryMobile";
import { updateKart } from "../services/actions/actionKart";
import { clientAxiosProduct } from "../services/client/axiosClient";


const selector = state => state.category;
const selector2 = state => state.subCategory;
const selector3 = state => state.kart;

const Header = () => {

    const state = useSelector(selector);
    const statesubcatgory = useSelector(selector2);
    const kartState = useSelector(selector3);
    const dispatch = useDispatch();

    useEffect(_ => {
        dispatch(clientAxiosProduct("category", null, category_action));
        dispatch(clientAxiosProduct("subcategory", null, subCategory_action));
        dispatch(updateKart());
    }, []);

    function showLogin() {
        document.querySelector('.modal').classList.toggle("modal-show");
    }


    const mobileMenuOpenBtn = () => document.querySelector('[data-mobile-menu]').classList.toggle('active');

    function accordionBtn(e) {
        e.target.nextElementSibling.classList.toggle('active');
        e.target.classList.toggle('active');
    }

    function renderizado() {
        if (state.error.exist || statesubcatgory.error.exist) return alert(state.error.message);
        if (state.loader && statesubcatgory.loader) return (<p>Charging</p>);

        return (
            <>
            <header>
            <div className="header-top">
                <div className="container">
                    <ul className="header-social-container">
                        <li>
                        <a href="https://www.facebook.com" target="_blank" className="social-link">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        </li>
                        <li>
                        <a href="https://twitter.com" target="_blank" className="social-link">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                        </li> 
                        <li>
                        <a href="https://www.instagram.com" target="_blank" className="social-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com" target="_blank" className="social-link">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="header-main">
                <div className="container container-flex">
                    <a href="/" className="header-logo select" data-id="home">
                        <img src="/images/img/protofinal (4).png" className="logo" alt="puma-logo" data-id="home" />
                    </a>

                    <Search></Search>

                    <div className="header-user-actions">
                        <button className="action-btn inicio" onClick={showLogin}>
                            <ion-icon name="person-outline"></ion-icon>
                        </button>
                        <button className="action-btn select carrito" data-id="Carrito">
                            <Link to={"/kart"}><ion-icon name="cart-outline"></ion-icon></Link>
                            <span className="count">{kartState.items.length}</span>
                        </button>
                    </div>
                </div>
            </div>

            <nav className="desktop-navigation-menu">
                <div className="container">
                    <ul className="desktop-menu-category-list">
                        <li className="menu-category">
                            <Link className="menu-title" to={"/"}>
                                Inicio
                            </Link>
                        </li>
                        <li className="menu-category">
                            <a className="menu-title" >Categorias</a>
                            <div className="dropdown-panel">
                                <NavCategory data={state.data} dataSubcategory={statesubcatgory.data}></NavCategory>
                            </div>
                        </li>

                        <li className="menu-category">
                            <a href="#" className="menu-title select" data-id="ofertas">Ofertas</a>
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <a href="#">10% de descuento</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">15% de descuento</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">20% de descuento</a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#">30% de descuento</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-category">
                            <Link to={"/products"} className="menu-title select" data-id="busqueda">Comprar</Link>
                        </li>
                        <li className="menu-category">
                            <Link to={"/faqs"} className="menu-title select" data-id="faq">Ayuda</Link>
                        </li>
                        <li className="menu-category">
                            <Link to={"/about"} className="menu-title select" data-id="acerca">Sobre nosotros</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/*---------------------------------------------------------------------*/}
            <div className="mobile-bottom-navigation">
                <button className="action-btn" data-mobile-menu-open-btn onClick={mobileMenuOpenBtn}>
                    <ion-icon name="menu-outline"></ion-icon>
                </button>
                <Link className="action-btn carrito" data-id="Carrito" to={"/kart"}>
                    <ion-icon name="cart-outline" id="carrito"></ion-icon>
                    <span className="count">{kartState.items.length}</span>
                </Link>
                <button className="action-btn" onClick={() => window.location.href = "/"}>
                    <ion-icon name="home-outline"></ion-icon>
                </button>
                <button className="action-btn inicio" onClick={showLogin}>
                    <ion-icon name="person-outline"></ion-icon>
                </button>
            </div>

            <nav className="mobile-navigation-menu" data-mobile-menu>
                <div className="menu-top">
                    <h2 className="menu-title">Menu</h2>
                    <button className="menu-close-btn" data-mobile-menu-close-btn onClick={mobileMenuOpenBtn}>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                </div>
                <ul className="mobile-menu-category-list">
                    <li className="menu-category">
                        <a href="/" className="menu-title select" data-id="home">Inicio</a>
                    </li>
                    <li className="menu-category">
                        <NavCategoryMobile data={state.data}></NavCategoryMobile>
                    </li>
                    <li className="menu-category">
                        <button className="accordion-menu" data-accordion-btn onClick={(e) => accordionBtn(e)}>
                            <p className="menu-title select" data-id="ofertas">Ofertas</p>
                            <div>
                                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                            </div>
                        </button>
                        <ul className="submenu-category-list" data-accordion>
                            <li className="submenu-category">
                                <a href="#" className="submenu-title">10% de descuento</a>
                            </li>
                            <li className="submenu-category">
                                <a href="#" className="submenu-title">15% de descuento</a>
                            </li>
                            <li className="submenu-category">
                                <a href="#" className="submenu-title">20% de descuento</a>
                            </li>
                            <li className="submenu-category">
                                <a href="#" className="submenu-title">30% de descuento</a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-category">
                        <Link to={"/products"} className="menu-title select" data-id="busqueda">Comprar</Link>
                    </li>
                    <li className="menu-category">
                        <Link to={"/faqs"} className="menu-title select" data-id="faq">Ayuda</Link>
                    </li>
                    <li className="menu-category">
                        <Link to={"/about"} className="menu-title select" data-id="acerca">Sobre nosotros</Link>
                    </li>
                </ul>

                <div className="menu-bottom">
                    <ul className="menu-social-container">
                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-link">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
        <Login toggle={showLogin}></Login>
    </>
        )
    }
    return (
        renderizado()
    )
}

export default Header;