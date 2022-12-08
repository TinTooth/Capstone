import { useEffect, useState } from "react";
import axios from "axios";
import "./OrderForm.css"


const OrderForm = ({setItems, setOrder}) => {
    const [products,setProducts] = useState([]);
    const [options,setOptions] = useState([])
    
    useEffect(()=>{
        getProducts();
        getOptions();
    },[])


    async function getProducts() {
        const response = await axios.get("http://127.0.0.1:8000/api/products/")
        setProducts(response.data)
    }

    async function getOptions() {
        const response = await axios.get("http://127.0.0.1:8000/api/products/options/")
        setOptions(response.data)
    }

    return ( 
        <div className="form-container">
            Order Form
        </div>
     );
}
 
export default OrderForm;