import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx"
import ItemList from "../../components/OrderComponents/ItemsList/ItemList.jsx";
import OrderForm from "../../components/OrderComponents/OrderForm/OrderForm.jsx";
import useAuth from "../../hooks/useAuth";
import "./OrderPage.css"



const OrderPage = () => {
    const [user] = useAuth();
    const [items, setitems] = useState([]);


    return user ? (
        <>
        <NavBar></NavBar>
        <div className="b">

            <OrderForm setItems={setitems}  items = {items}/>
            <div className="item-list-container">
            <ItemList items = {items} setItems = {setitems}></ItemList>
            </div>
            
        </div>
        </>  
        
    ): 
    <>
    <NavBar></NavBar>
    <div className="login-message">Please LogIn to Place an Order</div>
    </>
}
 
export default OrderPage;