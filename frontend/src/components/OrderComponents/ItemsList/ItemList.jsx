import { useEffect,useState } from "react";
import Item from "../Item/Item";
import "./itemList.css"

const ItemList = ({items, setItems}) => {
    const [total, setTotal] = useState(0);

    const click = () => {
        console.log(items);
    }

    useEffect (()=>{
        getTotal();
    },[items])

    const getTotal = () => {
        if (items.length > 0) {
            let result = 0;
            items.forEach(item => {
                if (item.quantity%12 === 0 ) {
                    let price = (item.quantity/12)*item.product.price
                    result+=price;
                }
                else {
                    let price = item.quantity*item.product.price
                    result+=price;
                }
            })
            setTotal(result);
        }
    }

    

    return items.length ? (
        <>
        <div className="item-list">
            <div> Order Items</div>
            <table>
                <thead>
                    <tr>
                        <th> #</th>
                        <th> Item</th>
                        <th> Quantity </th>
                        <th> Price</th>
                        <th> </th>

                    </tr>
                </thead>
                <tbody>

                {items.map((item ,i) =>{
                    return (
                        <tr key = {i}>
                            <Item item = {item} i ={i} setItems = {setItems} items = {items}/>                       
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>Total ${total}</div>
        </div>
        {/* <div onClick = {click}>TEST</div> */}
        </>
        
    ):<div className="item-list">
        <div> Order Items</div>
        <table>
                <thead>
                    <tr>
                        <th> #</th>
                        <th> Item</th>
                        <th> Price</th>
                        <th> </th>
                    </tr>
                </thead>
        </table>
        <div>Total 0</div>

    </div>;
}
 
export default ItemList;

