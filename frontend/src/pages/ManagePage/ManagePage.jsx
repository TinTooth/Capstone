import axios from "axios";
import useConfig from "../../hooks/useConfig";
import { useState,useEffect } from "react";
import ManageOrdersLists from "../../components/ManageComponents/OrderListComponents/ManageOrdersLists/ManageOrdersLists";
import Manager from "../../components/ManageComponents/ManagerComponents/Manager/Manager";
import "./ManagePage.css"
import WorkCalendar from "../../components/ManageComponents/CalendarComponents/WorkCalendar/WorkCalendar";
import NavBar from "../../components/NavBar/NavBar.jsx"


const ManagePage = () => {
    const config = useConfig();
    const [orders, setorders] = useState([]);
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
        <NavBar/>
        <div className="page-container">
            <WorkCalendar orders = {orders}/>
        <ManageOrdersLists orders = {orders} getOrders = {getOrders} setcurrentOrder = {setcurrentOrder}/>
        <Manager currentOrder={currentOrder} getOrders = {getOrders} orders = {orders}/>
        </div>
        </>
      );
}
 
export default ManagePage;