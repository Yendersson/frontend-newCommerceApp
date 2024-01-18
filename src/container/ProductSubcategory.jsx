import List from "./pure/List";
import { useProductSubCategory } from "../hooks/useProductCategory";
import Spinner from "./pure/Spinner";

const ProductSubCategory = () => {

    const { products, state, name } = useProductSubCategory();

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

export default ProductSubCategory;