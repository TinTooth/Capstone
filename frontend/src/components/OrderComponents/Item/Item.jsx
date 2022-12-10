import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';

const Item = ({item,i,setItems,items}) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

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
        <td> {item.quantity}</td>
        <td> {item.product.name}</td>
        <td> {`$${calcPrice()}`}</td>
        <td> 
            <button onClick = {removeItem}>REMOVE</button>
            <Button variant ="primary" ref={target} onClick = {()=>setShow(!show)}>
                Details
            </Button>
            <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              zIndex: 100,
              borderRadius: 3,
              maxWidth: 250,
              ...props.style,
            }}
          >

            <div>Item:  {item.product.name}</div>
            {item.product.type === 'cake' &&
            <div>Size:  {item.product.description}</div>
            }
            <div>Frosting:  {item.frosting}</div>
            <div>Cake Flavor:  {item.cake_flavor}</div>
            <div>Filling:  {item.filling}</div>
            <div>Details:</div>
            <div>{item.design_details}</div>
          </div>
        )}
      </Overlay>
            </td>
        
       </> 
    );
}
 
export default Item;