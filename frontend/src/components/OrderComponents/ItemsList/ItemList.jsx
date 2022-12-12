import { useEffect,useState } from "react";
import Item from "../Item/Item";
import "./itemList.css"
import useCalc from "../../../hooks/useCalc";

const ItemList = ({items, setItems, noRemove = false, noDetails = false, setcurrentItem}) => {
    const [total, setTotal] = useState(0);
    const [getPrice] = useCalc();

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
                result += getPrice(item);
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
                        <th> </th>
                        <th> Item</th>
                        <th> Price</th>
                        <th> </th>

                    </tr>
                </thead>
                <tbody>

                {items.map((item ,i) =>{
                    return (
                        <tr key = {i}>
                            <Item item = {item} i ={i} setItems = {setItems} setcurrentItem = {setcurrentItem}
                             items = {items} noRemove = {noRemove} noDetails = {noDetails}/>                       
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

