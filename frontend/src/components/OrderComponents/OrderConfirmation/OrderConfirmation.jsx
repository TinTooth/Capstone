import ItemList from "../ItemsList/ItemList";
import useAuth from "../../../hooks/useAuth";
import useDate from "../../../hooks/useDate";
import "./OrderConfirmation.css"
import { useState, useEffect } from "react";
import axios from "axios";
import useConfig from "../../../hooks/useConfig";



const OrderConfirmation = ({order,items, close}) => {
    const [user] = useAuth();
    const [likelihoodString, setlikelihoodString] = useState('Click Here');
    const [getDateString,getWeekWorkTime,getLikelihood,getWorkTime] = useDate();
    const [allItems, setAllItems] = useState([]);
    const config = useConfig();

    useEffect (() => {
        getItems()
    },[])

    useEffect (() => {
        getLikelihoodString()
    },[allItems])

    const getLikelihoodString = () => {
        setlikelihoodString(getLikelihood(getWeekWorkTime(order.deliver_date,allItems) + getWorkTime(items)));  
    }

    async function getItems() {
        let response = await axios.get('http://127.0.0.1:8000/api/order/1/items/all',config)
        setAllItems(response.data)
    }


    return ( 
        <div className="confirmation-container">
            {/* <div className="title">Order Confrimation</div> */}
            <div className="order-details-container">
                <div>
                    <div className="title"> {user.first_name} {user.last_name}'s Order</div>
                    <div className="detail"></div>
                    <div className="detail"> Date:  {getDateString(order.deliver_date)}</div>
                    <div className="detail"> Order Number: {order.id}</div>
                </div>
                <ItemList items = {items} noRemove = {true}/>
            </div>
            <div className="order-details-container">
                <div>
                    Thank you for the order request
                </div>
                <div >
                    {likelihoodString} 
                </div>
                <div>
                    Write down the Order Number for future reference!
                </div>
                <button onClick={close}>Close</button>
            </div>
        
        </div>
     );
}
 

export default OrderConfirmation;