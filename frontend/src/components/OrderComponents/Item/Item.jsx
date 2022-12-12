import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import useCalc from "../../../hooks/useCalc";
import Tooltip from 'react-bootstrap/Tooltip';


const Item = ({item,i,setItems,items,noRemove,noDetails,setcurrentItem}) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [getPrice] = useCalc();

    const removeItem = () => {
        items.splice(i,1);
        let newArray = [...items];
        setItems(newArray);
    }

    const selectItem = () => {
      setcurrentItem(item);
    }

    const renderDetails = (props) => {
      return (
        <Tooltip id ="button-tooltip" 
         {...props}>

      <div>Item:  {item.product.name}</div>
      {item.product.type === 'cake' &&
      <div>Size:  {item.product.description}</div>}
      <div>Frosting:  {item.frosting}</div>
      <div>Cake Flavor:  {item.cake_flavor}</div>
      <div>Filling:  {item.filling}</div>
      <div>Details:</div>
      <div>{item.design_details}</div>
  
      </Tooltip>
      )
    }
    
    return ( 
       <>
        <td> {item.quantity}</td>
        <td> {item.product.name}</td>
        <td> {`$${getPrice(item)}`}</td>
        <td> 
            { noRemove === false && <button onClick = {removeItem}>REMOVE</button> }
            { noDetails === false && <Button variant ="primary" ref={target} onClick = {()=>setShow(!show)}>
                Details
            </Button>}
            {noDetails === true && <button onClick = {selectItem}>EDIT</button>}
            <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: '#3d4757',
              padding: '2px 10px',
              color: 'white',
              zIndex: 100,
              borderRadius: 3,
              maxWidth: 250,
              padding: 20,
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