import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx"
import ItemList from "../../components/OrderComponents/ItemsList/ItemList.jsx";
import OrderForm from "../../components/OrderComponents/OrderForm/OrderForm.jsx";
import useAuth from "../../hooks/useAuth";
import "./OrderPage.css"



const OrderPage = () => {
    const [user] = useAuth();
    const [items, setitems] = useState([]);
    

    const submitOrder = (order) => {
        return
    } 

    return user ? (
        <>
        <NavBar></NavBar>
        <div className="container-no-wrap">

        <OrderForm setItems={setitems}  items = {items}/>
        <ItemList items = {items} setItems = {setitems}></ItemList>
        </div>
        </>  
        
    ): 
    <>
    <NavBar></NavBar>
    <div className="login-message">Please LogIn to Place an Order</div>
    </>
}
 
export default OrderPage;