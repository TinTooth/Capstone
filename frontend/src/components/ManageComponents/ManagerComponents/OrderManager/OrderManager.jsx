import "./OrderManager.css"

const OrderManager = ({show, currentOrder}) => {
    return show ?( 
        <div className="manager container-no-wrap">
            <div className="items-container">
            Items
            </div>
            <div className="editor">
                {currentOrder.id}
            </div>
            <div className="order-container">
                ORder
            </div>
        </div>

     ) :null;
}
 
export default OrderManager;