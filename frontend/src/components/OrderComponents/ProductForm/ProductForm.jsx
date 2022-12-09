import axios from "axios";
import { useState,useEffect } from "react";
import useCustomForm from "../../../hooks/useCustomForm";
import Input from "../../Util/Input/Input";

const ProductForm = ({product,addItem}) => {
    const [options,setOptions] = useState([]);
    const item = {
        order_id: 0,
        product_id: 0,
        quantity: 0,
        design_details: ""
    }
    const input = {
        order_id: 0,
        product_id: 0,
        quantity: 0,
        cakeflavor: "",
        frosting: "",
        filling: "",
        design_details: ""
    }


    const createItem = (formData) => {
        item.quantity = formData.quantity;
        item.design_details = `CakeFlavor: ${formData.cakeflavor}  Frosting: ${formData.frosting} Filling: ${formData.filling}                          ${formData.design_details}`;
        console.log(item);
    }
    const [formData, handleInputChange,handleSubmit] = useCustomForm(input,createItem)

    useEffect(()=>{
        getOptions();
    },[]);

    async function getOptions() {
        const response = await axios.get("http://127.0.0.1:8000/api/products/options/")
        setOptions(response.data)
    }

    
    return options.length ? (
        <div>
            <form onSubmit={handleSubmit}>
                <Input title = "Cake Flavor:" name ="cakeflavor" value = {formData.cakeflavor} onChange = {handleInputChange} />
                <select name ="frosting" onChange = {handleInputChange}>
                    <option value = 'vanilla'> Vanilla</option>
                    <option value = 'chocolate'> Chocolate</option>
                    <option value = 'creamcheese'> Cream Cheese</option>
                </select>
                <button type="submit">ADD</button>
            </form>
        </div> 
     ) :null;
}
 
export default ProductForm;