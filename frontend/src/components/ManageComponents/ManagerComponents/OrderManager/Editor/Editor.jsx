import axios from "axios";
import useConfig from "../../../../../hooks/useConfig";
import useCustomForm from "../../../../../hooks/useCustomForm.js"


const Editor = ({item,order}) => {
    const config = useConfig();
    const [formData, handleInputChange,handleSubmit] = useCustomForm(item,);



    return item ? ( 
        <form>
            <div>{item.price}</div>
            <div>{item.product.name}</div>

        </form> 
    ): null;
}
 
export default Editor;