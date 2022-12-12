import axios from "axios";
import { useState,useEffect } from "react";
import useCustomForm from "../../../hooks/useCustomForm";
import Input from "../../Util/Input/Input";

const ProductForm = ({product,addItem,closeModal,products}) => {
    const [options,setOptions] = useState([]);
    const [filteredOptions, setfilteredOptions] = useState({});
    const quantity = [{description:12},{description:24},{description:36},{description:48},{description:60}]
  
    const item = {
        product:product,
        order_id: 0,
        quantity: 1,
        design_details: "Add Theme and Design Details (Colors, Theme...) Here as Well as Any Special Instructions for Lisa",
        cake_flavor: "NA",
        frosting: "NA",
        filling: "NA",
    }
    
    const createItem = (formData) => {
        if (product.type === "Cakes"){
            let newproduct = products.filter(p => p.description === formData.size && p.name.includes(product.name));
            console.log(newproduct[0]);
            formData.product = newproduct[0];
        }
        addItem(formData)
        closeModal();
    }
    const [formData, handleInputChange,handleSubmit] = useCustomForm(item,createItem)

    useEffect(()=>{
        getOptions();
    },[]);

    useEffect(()=>{
        setArrays();
    },[options]);

    async function getOptions() {
        const response = await axios.get("http://127.0.0.1:8000/api/products/options/")
        setOptions(response.data)
    }

    const setArrays = () => {
        let cakeflavors = options.filter(o => o.type === "Cake Flavors");
        let classicFrostings = options.filter(o => o.type === "Classic Frostings");
        let specialtyFrostings = options.filter(o => o.type === "Specialty Frostings");
        let allFrostings = [...classicFrostings,...specialtyFrostings];
        let cakesize= options.filter(o => o.type === "Cake Size");
        let classicFillings= options.filter(o => o.type === "Classic Fillings");
        let specFillings= options.filter(o => o.type === "Specialty Fillings");
        let allFillings = [...classicFillings,...specFillings];
        let cupcakeFlavors= options.filter(o => o.type === "Specialty Cupcake Flavors");
        setfilteredOptions({cakeflavors,classicFrostings,allFrostings, classicFillings, allFillings,cakesize,cupcakeFlavors})
    }

    const cakefrostings = () => {
        return product.name.includes("Classic") ? (filteredOptions.classicFrostings) : filteredOptions.allFrostings;
    } 
    const cakefillings = () => {
        return product.name.includes("Classic") ? (filteredOptions.classicFillings) : filteredOptions.allFillings;
    } 
    

    
    return options.length && product.type === "Cakes" ? (
        <div className="no-wrap-container">
            <div>{product.description}</div>
            <div>${product.price} Each, Depending on Size </div>
            <form className = 'form' onSubmit={handleSubmit}>
                <Input title = "Cake Flavor: " name ="cake_flavor" value = {formData.cake_flavor}
                 onChange = {handleInputChange} options = {filteredOptions.cakeflavors} select = {true}/>
                <Input title = "Cake Frosting: " name ="frosting" value = {formData.frosting}
                 onChange = {handleInputChange} options = {cakefrostings()} select = {true}/>
                <Input title = "Cake Filling: " name ="filling" value = {formData.filling}
                 onChange = {handleInputChange} options = {cakefillings()} select = {true}/>
                <Input title = "Cake Size: " name ="size" value = {formData.size}
                 onChange = {handleInputChange} options = {filteredOptions.cakesize} select = {true}/>
                <Input title = "Details: " name ="design_details" value = {formData.design_details}
                 onChange = {handleInputChange} textArea = {true}/>
                <button type="submit">ADD</button>
            </form>
        </div> 
     ) : options.length && product.type === "Cupcakes"  && product.name != "Lisa's Specialty Cupcake"?(
        <div className="no-wrap-container">
            <div>{product.description}</div>
            <div>${product.price} Per Dozen </div>
            <form className = 'form' onSubmit={handleSubmit}>
                <Input title = "Cake Flavor: " name ="cake_flavor" value = {formData.cake_flavor}
                    onChange = {handleInputChange} options = {filteredOptions.cakeflavors} select = {true}/>
                <Input title = "Frosting: " name ="frosting" value = {formData.frosting}
                    onChange = {handleInputChange} options = {filteredOptions.classicFrostings} select = {true}/>
                <Input title = "Quantity: " name ="quantity" value = {formData.quantity}
                    onChange = {handleInputChange} options = {quantity} select = {true}/>
                <Input title = "Details: " name ="design_details" value = {formData.design_details}
                    onChange = {handleInputChange} textArea = {true}/>
                <button type="submit">ADD</button>
            </form>
        </div> 
     ):options.length && product.type === "Cupcakes" ? (
        <div className="no-wrap-container">
            <div>{product.description}</div>
            <div>{product.price} Per Dozen </div>
            <form className = 'form' onSubmit={handleSubmit}>
                <Input title = "Specialty CupCake: " name ="cake_flavor" value = {formData.cake_flavor}
                    onChange = {handleInputChange} options = {filteredOptions.cupcakeFlavors} select = {true}/>
                <Input title = "Quantity: " name ="quantity" value = {formData.quantity}
                    onChange = {handleInputChange} options = {quantity} select = {true}/>
                <Input title = "Details: " name ="design_details" value = {formData.design_details}
                onChange = {handleInputChange} textArea = {true}/>
                <button type="submit">ADD</button>
            </form>
        </div> 
    ): options.length  && product.pricebydozen ? (
        <div className="no-wrap-container">
            <div>{product.description}</div>
            <div>${product.price} Per Dozen </div>
            <form className = 'form' onSubmit={handleSubmit}>
                <Input title = "Quantity: " name ="quantity" value = {formData.quantity}
                    onChange = {handleInputChange} options = {quantity} select = {true}/>
                <Input title = "Details: " name ="design_details" value = {formData.design_details}
                onChange = {handleInputChange} textArea = {true}/>
                <button type="submit">ADD</button>
            </form>
        </div> 
    ): options.length ? (
        <div className="no-wrap-container">
            <div>{product.description}</div>
            <div>${product.price} Each</div>
            <form className = 'form' onSubmit={handleSubmit}>
                <Input title = "Quantity: " name ="quantity" value = {formData.quantity}
                    onChange = {handleInputChange} />
                <Input title = "Details: " name ="design_details"value = {formData.design_details}
                onChange = {handleInputChange} textArea = {true}/>
                <button type="submit">ADD</button>
            </form>
        </div> ):null;
}
 
export default ProductForm;