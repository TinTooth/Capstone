import "./itemList.css"

const ItemList = ({items}) => {
    
    const click = () => {
        console.log(items);
    }

    return items.length ? (
        <>
        <div className="item-list">
            <div> Order Items</div>
            {items.map((item ,i) =>{
                return (
                    <div key = {i}> {i+1} {item.product.price} </div>
                    )
                })}
        </div>
        <div onClick = {click}>TEST</div>
        </>
        
    ):<div className="item-list"><div> Order Items</div></div>;
}
 
export default ItemList;

