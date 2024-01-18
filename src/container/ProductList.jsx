import List from "./pure/List";
import Spinner from "./pure/Spinner";
import { useProductList } from "../hooks/useProductList";

const ProductList = () => {

    const { isVisible, state, search } = useProductList();

    return (
        <>
            {
                state.loader ?
                    (<Spinner />) :
                    state.error.exist ?
                        (<div>Ha ocurrido un error: {state.error.message}</div>) :
                        (search) ?
                            (
                                <div className={`fade ${isVisible ? 'in' : 'out'}`}>
                                    <List data={state.data} result={search}></List>
                                </div>
                            ) :
                            (
                                <div className={`fade ${isVisible ? 'in' : 'out'}`}>
                                    <List data={state.data} result="Todos los productos"></List>
                                </div>
                            )
            }
        </>
    )
}

export default ProductList;