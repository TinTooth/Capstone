import axios from "axios";
import { useEffect } from "react";
import useConfig from "../../../../../hooks/useConfig";
import useCustomForm from "../../../../../hooks/useCustomForm.js"
import Input from "../../../../Util/Input/Input";


const Editor = ({item}) => {
    const config = useConfig();
    const updateItem = (e) => {
        e.preventDefault();
    }
    const [formData, handleInputChange,handleSubmit,reset] = useCustomForm(item,updateItem);

    useEffect(()=> {
        reset();
    },[item])


    return item ? ( 
        <form onSubmit = {handleSubmit}>
            <Input title = 'Cake Flavor:' name = 'cake_flavor' value = {formData.cake_flavor} onChange = {handleInputChange}/>
            <Input title = 'Frosting:' name = 'frosting' value = {formData.frosting} onChange = {handleInputChange}/>
            <Input title = 'Filling:' name = 'filling' value = {formData.filling} onChange = {handleInputChange}/>
            <Input title = 'Price:' name = 'price' value = {formData.price} onChange = {handleInputChange}/>
            <Input textArea = {true} title = 'Design:' name = 'design_details' value = {formData.design_details} onChange = {handleInputChange}/>
    
            <button type = 'submit'>Save Changes</button>
        </form> 
    ): null;
}
 
export default Editor;