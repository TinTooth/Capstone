import { useEffect, useState } from "react";
import useDate from "../../../hooks/useDate"
import ManageOrderStatus from "../ManageOrderStatus/ManageOrderStatus";
import Table from 'react-bootstrap/Table';

const OrderList = ({orders, filter, setorder, getOrders}) => {
    const [filteredOrders, setfilteredOrders] = useState([]);
    const [getdatestring] = useDate();
    
    useEffect(() => {
        filterOrders();
    },[orders])

    const filterOrders = () => {
        let results = orders.filter(o => o.status === filter)
        setfilteredOrders(results)
    }
    
    return ( 
        <div className="table">
            <div className="t-row">
                    <div className="n-cell"> # </div>
                    <div className="c-cell"> Customer </div>
                    <div className="d-cell"> Date </div>
                    <div className="b-cell"></div>
            </div>
            <div className="data overflow-auto">
                {  filteredOrders.map((o,i) => {
                    return (
                        <div className="t-row" key = {i}>
                           <ManageOrderStatus order = {o} getOrders = {getOrders} filter = {filter}/>
                        </div>
                    )
                } )
                }
            </div>
        </div>
     );
}
 
export default OrderList;