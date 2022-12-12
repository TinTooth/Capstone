import axios from "axios";
import useConfig from "../../hooks/useConfig";
import { useState,useEffect } from "react";
import ManageOrdersLists from "../../components/ManageComponents/ManageOrdersLists/ManageOrdersLists";
import "./ManagePage.css"

const ManagePage = () => {
    const config = useConfig();
    const [orders, setorders] = useState();

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

        <ManageOrdersLists orders = {orders} setorders = {setorders} getOrders = {getOrders}/>
        </div>
        </>
      );
}
 
export default ManagePage;