import { useSelector } from "react-redux";

const selector = state => state.product;
const Bill = () =>{
  const state = useSelector(selector);
  

  


    return (
      <div>Hola Mundo</div>
    );

}

export default Bill;