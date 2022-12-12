import { useState } from "react";
import ProductManager from "../ProductManager/ProductManager";
import OrderManager from "../OrderManager/OrderManager";
import "./Manager.css"


const Manager = ({currentOrder}) => {
    const [orderShow, setorderShow] = useState(true);
    const [itemShow, setitemShow] = useState(false);
    


     
    const handleOrder = () => {
        setitemShow(false);
        setorderShow(true);
    }
    const handleItem = () => {
        setorderShow(false);
        setitemShow(true);
    }
    
    return ( 
        <div className="manager-container">
            <div>
                <button onClick={handleOrder}>Order Manager</button>
                <button onClick={handleItem}>Product Manager</button>
            </div>
            <OrderManager show = {orderShow} currentOrder = {currentOrder}/>
            <ProductManager show = {itemShow}/>
        </div>
     );
}
 
export default Manager;