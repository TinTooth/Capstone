import OrderList from "../OrderList/OrderList";
import "./ManageOrdersLists.css"

const ManageOrderLists = ({orders,setorders,getOrders}) => {
    return orders ? ( 
        <div className="order-lists">
            <div className="lists-container">
                    <div className="table-name">Accepted Orders</div>
                    <div className="table-name">Pending Orders</div>
                    <div className="table-name">Rejected Orders</div>
            </div>
            <div className="lists-container pad">
                <OrderList orders = {orders} filter = "Accepted" setorders = {setorders} getOrders ={getOrders}/>
                <OrderList orders = {orders} filter = "Pending" setorders = {setorders} getOrders ={getOrders}/>
                <OrderList orders = {orders} filter = "Rejected" setorders = {setorders} getOrders ={getOrders}/>
            </div>
        </div>
     ): null;
}
 
export default ManageOrderLists;