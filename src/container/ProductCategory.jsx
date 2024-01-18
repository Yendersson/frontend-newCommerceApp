import List from "./pure/List";
import { useProductCategory } from "../hooks/useProductCategory";
import Spinner from "./pure/Spinner";

const ProductCategory = () => {

    const { products, state, name } = useProductCategory();
    return (
        <>
            {
                state.loader ?
                    (<Spinner />) :
                    state.error.exist ?
                        (<div>Ha ocurrido un error: {state.error.message}</div>) :
                        (
                            <div>
                                <List data={products} result={name}></List>
                            </div>
                        )
            }
        </>
    )
}

export default ProductCategory;