import { useEffect,useState } from "react";
import Item from "../Item/Item";
import "./itemList.css"
import useCalc from "../../../hooks/useCalc";
import Table from "react-bootstrap/esm/Table";

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
        <div className='heading'>Order Items</div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th > # </th>
                        <th > Item</th>
                        <th> Price</th>
                        <th > </th>

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
            <div className="total">Total ${total}</div>
        </div>
        {/* <div onClick = {click}>TEST</div> */}
        </>
        
    ):<div className="item-list">
          
                <div className='heading'>Order Items</div>
            
    

    </div>;
}
 
export default ItemList;

