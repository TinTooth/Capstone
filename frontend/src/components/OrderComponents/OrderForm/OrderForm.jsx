import { useEffect, useState } from "react";
import axios from "axios";
import "./OrderForm.css"
import ProductList from "../ProductList/ProductList";
import useCustomForm from "../../../hooks/useCustomForm";


const OrderForm = ({setItems, items}) => {
    const [products,setProducts] = useState([]);
    const [options,setOptions] = useState([]);
    let order = {
        user:1,
        deliver_date: "",
        status: "Pending",
        total_work_time: 0,
        total_price: 0,
        notes:""
    }
    
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

    const addItem = (item) => {
        let newitems = [...items,item];
        setItems(newitems);
    }

    const createOrder= () => {
        
    }

    const [formData, handleInputChange,handleSubmit] = useCustomForm(order,createOrder)

    

    return ( 
        <div className="form-container">
            <div className="products-row">
                <ProductList addItem={addItem} productName ={"Cakes"} products = {products}></ProductList>
                <ProductList addItem={addItem} productName ={"Cupcakes"} products = {products}></ProductList>
                <ProductList addItem={addItem} productName = {"Cookies"} products = {products}> </ProductList>
                <ProductList addItem={addItem} productName = {"Goodies"} products = {products}></ProductList>
            </div>
            
        </div>
     );
}
 
export default OrderForm;