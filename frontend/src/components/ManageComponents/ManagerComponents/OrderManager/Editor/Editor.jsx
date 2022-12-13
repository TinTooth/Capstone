import axios from "axios";
import { useEffect,useState } from "react";
import useConfig from "../../../../../hooks/useConfig";
import useCustomForm from "../../../../../hooks/useCustomForm.js"
import Input from "../../../../Util/Input/Input";
import Modal from "../../../../Util/Modal/Modal";
import useCalc from "../../../../../hooks/useCalc";

const Editor = ({item, getItems, order, putOrder, items,editorShow}) => {
    const config = useConfig();
    const [itemDeleteShow, setitemDeleteShow] = useState(false);
    const [getPrice, getWorkTime] = useCalc();

    const updateItem = (e) => {
        
    }

    async function putItem() {
        let response = await axios.put(`http://127.0.0.1:8000/api/order/1/items/manage/${item.id}/`,formData,config)
        getItems();
    }

    async function deleteItem() {
        let response = await axios.delete(`http://127.0.0.1:8000/api/order/1/items/manage/${item.id}/`,config)
        if (response.status === 204) {
            getItems();
            setitemDeleteShow(true)
        }
    }
    async function putOrder() {
        let updatedOrder = order;
        updatedOrder.total_price = getTotalPrice();
        updatedOrder.total_work_time = getWorkTime(items);
        console.log(updatedOrder);
        const response = await axios.put(`http://127.0.0.1:8000/api/order/${updatedOrder.id}/`,updatedOrder,config)
    }
    const closeDelete = () => {
        putOrder();
        setitemDeleteShow(false)
    }

    const getTotalPrice = () => {
        let result = 0;
        console.log(items);
        items.forEach(item => {
            result += getPrice(item);
        });
        return result
    }

    const updateOrder = () => {

    }

    const deleteOrder =() => {
        
    }
    

    const [formData, handleInputChange,handleSubmit,reset] = useCustomForm(item,updateItem);
    const [formData2, handleInputChange2,handleSubmit2,reset2] = useCustomForm(order,updateOrder);
    
    useEffect(()=> {
        reset();
        reset2();
    },[item,order])


    return item && editorShow ? (
        <>
        <Modal title = "Deleted" modal = {itemDeleteShow} onClose = {closeDelete}> Item Succesfully Deleted
        <button onClick = {closeDelete}>Close</button></Modal>
        <form onSubmit = {handleSubmit}>
            <Input title = 'Cake Flavor:' name = 'cake_flavor' value = {formData.cake_flavor} onChange = {handleInputChange}/>
            <Input title = 'Frosting:' name = 'frosting' value = {formData.frosting} onChange = {handleInputChange}/>
            <Input title = 'Filling:' name = 'filling' value = {formData.filling} onChange = {handleInputChange}/>
            <Input textArea = {true} title = 'Design:' name = 'design_details' value = {formData.design_details} onChange = {handleInputChange}/>
            <button type = 'submit'>Save Changes</button>
        </form> 
        <button className="warning" onClick ={deleteItem}>DELETE</button>
        </> 
    ):  order.id && editorShow ?(
        <>
        <div>Order editor</div>
            <form onSubmit = {handleSubmit}>
            <Input type = "date" title = 'Deliver Date' name = 'deliver_date' value = {formData2.deliver_date} onChange = {handleInputChange}/>
            <Input title = 'Total Price:' name = 'total_price' value = {formData2.total_price} onChange = {handleInputChange}/>
            <Input title = 'Total Work Time:' name = 'total_work_time' value = {formData2.total_work_time} onChange = {handleInputChange}/>
            <div>Not If an Item is Delted or Added, the Total Price and Work time Will be Automatically Recalulated*</div>
            <Input textArea = {true} title = 'Notes:' name = 'notes' value = {formData2.notes} onChange = {handleInputChange}/>
            <button type = 'submit'>Save Changes</button>
        </form> 
        <button className="warning" onClick ={deleteOrder}>DELETE</button>
        </>
    ): <div>Please Select an Order</div>;
}
 
export default Editor;