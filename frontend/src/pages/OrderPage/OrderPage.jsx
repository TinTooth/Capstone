import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx"
import OrderForm from "../../components/OrderComponents/OrderForm/OrderForm.jsx";
import useAuth from "../../hooks/useAuth";
import "./OrderPage.css"



const OrderPage = () => {
    const [user] = useAuth();
    const [items, setitems] = useState([]);
    const [order, setOrder] = useState([]);

    const submitOrder = (order) => {
        return
    } 

    return user ? (
        <>
        <NavBar></NavBar>
        <OrderForm setItems={setitems} />
        </>  
        
    ): 
    <>
    <NavBar></NavBar>
    <div className="login-message">Please LogIn to Place an Order</div>
    </>
}
 
export default OrderPage;