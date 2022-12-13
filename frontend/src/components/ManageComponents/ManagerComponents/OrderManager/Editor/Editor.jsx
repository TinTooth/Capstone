import axios from "axios";
import { useEffect,useState } from "react";
import useConfig from "../../../../../hooks/useConfig";
import useCustomForm from "../../../../../hooks/useCustomForm.js"
import Input from "../../../../Util/Input/Input";
import Modal from "../../../../Util/Modal/Modal";


const Editor = ({item, getItems, setitem, putOrder, setitems, items}) => {
    const config = useConfig();
    const [itemDeleteShow, setitemDeleteShow] = useState(false);

    const updateItem = (e) => {
        putItem();
        
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
    const closeDelete = () => {
        putOrder();
        setitemDeleteShow(false)
    }

    const [formData, handleInputChange,handleSubmit,reset] = useCustomForm(item,updateItem);

    useEffect(()=> {
        reset();
    },[item])


    return item ? (
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
    ): <div>Please Select and Item</div>;
}
 
export default Editor;