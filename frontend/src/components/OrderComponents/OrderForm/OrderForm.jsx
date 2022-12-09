import { useEffect, useState } from "react";
import axios from "axios";
import "./OrderForm.css"
import ProductList from "../ProductList/ProductList";


const OrderForm = ({setItems}) => {
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
            <div className="products-row">
                <ProductList setItems={setItems} productName ={"Cakes"} products = {products}></ProductList>
                <ProductList setItems={setItems} productName ={"Cupcakes"} products = {products}></ProductList>
                <ProductList setItems={setItems} productName = {"Cookies"} products = {products}> </ProductList>
                <ProductList setItems={setItems} productName = {"Goodies"} products = {products}></ProductList>
            </div>
        </div>
     );
}
 
export default OrderForm;