import ItemList from "../../../OrderComponents/ItemsList/ItemList";
import "./OrderManager.css"
import axios from "axios";
import useConfig from "../../../../hooks/useConfig";
import { useState,useEffect } from "react";
import Editor from "./Editor/Editor";
import useCalc from "../../../../hooks/useCalc";

const OrderManager = ({show, currentOrder}) => {
    const [orderItems,setorderItems] = useState([]);
    const [editorShow, seteditorShow] = useState(true);
    const config = useConfig();
    const [currentItem, setcurrentItem] = useState();
    const [getPrice, getWorkTime] = useCalc();

    useEffect (()=> {
        getOrderItems();
        setcurrentItem('');
    },[currentOrder])

    async function getOrderItems() {
        let response = await axios.get(`http://127.0.0.1:8000/api/order/${currentOrder.id}/items/`,config);
        setorderItems(response.data);
    }


    async function putOrder() {
        let updatedOrder = currentOrder;
        updatedOrder.total_price = getTotalPrice();
        updatedOrder.total_work_time = getWorkTime(orderItems);
        console.log(updatedOrder);
        const response = await axios.put(`http://127.0.0.1:8000/api/order/${updatedOrder.id}/`,updatedOrder,config)
    }

    const getTotalPrice = () => {
        let result = 0;
        console.log(orderItems);
        orderItems.forEach(item => {
            result += getPrice(item);
        });
        return result
    }


    return show ?( 
        <div className="manager container-no-wrap">
            <div className="items-container">
                <ItemList items = {orderItems} noDetails = {true} noRemove = {true} setcurrentItem = {setcurrentItem}/>
            </div>
            <div className="editor">
                <Editor item = {currentItem} order = {currentOrder} items = {orderItems}
                setitems = {setorderItems} getItems = {getOrderItems} setitem = {setcurrentItem} putOrder = {putOrder}/>
            </div>
            <div className="order-container">
                ORder
            </div>
        </div>

     ) :null;
}
 
export default OrderManager;