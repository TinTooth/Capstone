import axios from "axios";
import useConfig from "../../hooks/useConfig";
import { useState,useEffect } from "react";
import ManageOrdersLists from "../../components/ManageComponents/OrderListComponents/ManageOrdersLists/ManageOrdersLists";
import Manager from "../../components/ManageComponents/ManagerComponents/Manager/Manager";
import "./ManagePage.css"

const ManagePage = () => {
    const config = useConfig();
    const [orders, setorders] = useState();
    const [currentOrder, setcurrentOrder] = useState({id:0});

    useEffect (()=> {
        getOrders()
    },[]) 
    
    async function getOrders() {
        let response = await axios.get("http://127.0.0.1:8000/api/order/",config)
        setorders(response.data)
    }

    const test = () => {console.log(orders)}


    return (
        <>
        <div className="page-container">
            <div>CALANDER GOES HERE</div>
        <ManageOrdersLists orders = {orders} getOrders = {getOrders} setcurrentOrder = {setcurrentOrder}/>
        <Manager currentOrder={currentOrder}/>
        </div>
        </>
      );
}
 
export default ManagePage;