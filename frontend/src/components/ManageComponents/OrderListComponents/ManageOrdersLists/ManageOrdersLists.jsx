import OrderList from "../OrderList/OrderList";
import "./ManageOrdersLists.css"

const ManageOrderLists = ({orders,setorders,getOrders,setcurrentOrder}) => {
    return orders ? ( 
        <div className="order-lists">
            {/* <div className="lists-container">
                    <div className="table-name">Upcoming Accepted Orders</div>
                    <div className="table-name">Pending Orders</div>
                    <div className="table-name">Recent Rejected Orders</div>
            </div> */}
            <div className="lists-container pad">
                <OrderList orders = {orders} filter = "Accepted" 
                    setcurrentOrder = {setcurrentOrder} getOrders ={getOrders} />
                <OrderList orders = {orders} filter = "Pending" 
                    setcurrentOrder = {setcurrentOrder}  getOrders ={getOrders}/>
                <OrderList orders = {orders} filter = "Rejected"
                     setcurrentOrder = {setcurrentOrder}  getOrders ={getOrders}/>
            </div>
        </div>
     ): null;
}
 
export default ManageOrderLists;