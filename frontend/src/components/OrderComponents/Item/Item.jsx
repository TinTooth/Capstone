const Item = ({item,i,setItems,items}) => {
    const calcPrice = () => {
        if (item.product.pricebydozen) {
            let price = (item.quantity/12)*item.product.price
            return price
        }
        else {
            let price = item.quantity*item.product.price
            return price
        }
    }

        const removeItem = () => {
            items.splice(i,1);
            let newArray = [...items];
            setItems(newArray);
        }
    
    return ( 
       <>
        <td> {i+1}</td>
        <td> {item.product.name}</td>
        <td> {item.quantity}</td>
        <td> {`$${calcPrice()}`}</td>
        <td> <button value = {i} onClick = {removeItem}>REMOVE</button></td>
       </> 
    );
}
 
export default Item;