import ItemList from "../ItemsList/ItemList";
import useAuth from "../../../hooks/useAuth";
import useDate from "../../../hooks/useDate";
import "./OrderConfirmation.css"


const OrderConfirmation = ({order,items, close}) => {
    const [user] = useAuth();
    const [getDateString] = useDate()



    return ( 
        <div className="confirmation-container">
            {/* <div className="title">Order Confrimation</div> */}
            <div className="order-details-container">
                <div>
                    <div className="title"> {user.first_name} {user.last_name}'s Order</div>
                    <div className="detail"></div>
                    <div className="detail"> Date:   {getDateString(order.deliver_date)}</div>
                    <div className="detail"> Order Number: {order.id}</div>
                </div>
                <ItemList items = {items} noRemove = {true}/>
            </div>
            <div className="order-details-container">
                <div>
                    Thank you for the order request
                </div>
                <div>
                    String about how likely it is for Lisa to accept order
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