import { useEffect, useState } from "react";
import axios from "axios";
import "./OrderForm.css"
import ProductList from "../ProductList/ProductList";
import useCustomForm from "../../../hooks/useCustomForm";
import Input from "../../Util/Input/Input";
import Modal from "../../Util/Modal/Modal";
import useConfig from "../../../hooks/useConfig";



const OrderForm = ({setItems, items}) => {
    const [products,setProducts] = useState([]);
    const [currentOrder,setcurrentOrder] = useState([]);
    const [options,setOptions] = useState([]);
    const [orderConfirmModal, setorderConfirmModal] = useState(false);
    const [itemConfirmModal, setitemConfirmModal] = useState(false);
    const config = useConfig();
    let order = {
        user:1,
        deliver_date: "",
        status: "Items Not Confirmed",
        total_work_time: 0,
        total_price: 0,
        notes:"Write general notes about the order here or anything else you would like to tell her. Who is this for? What kind of Event?"
    }
    
    useEffect(()=>{
        getProducts();
        getOptions();
    },[])

    async function getProducts() {
        const response = await axios.get("http://127.0.0.1:8000/api/products/")
        setProducts(response.data)
    }

    async function postItem(item) {
        const response = await axios.post(`http://127.0.0.1:8000/api/order/${currentOrder.id}/items/manage/`,item,config)
        setcurrentOrder(response.data)
    }
    
    async function postOrder() {
        const response = await axios.post("http://127.0.0.1:8000/api/order/",formData,config)
        setcurrentOrder(response.data)
    }

    async function putOrder() {
        let updatedOrder = currentOrder;
        updatedOrder.status = "Pending";
        updatedOrder.total_price = getTotalPrice();
        updatedOrder.total_work_time = getWorkTime();
        const response = await axios.put(`http://127.0.0.1:8000/api/order/${updatedOrder.id}/`,updatedOrder,config)
        setcurrentOrder(response.data)
    }

    async function getOptions() {
        const response = await axios.get("http://127.0.0.1:8000/api/products/options/")
        setOptions(response.data)
    }

    const getTotalPrice = () => {
        let result = 0;
        items.forEach(item => {
            if (item.product.pricebydozen) {
                let price = (item.quantity/12)*item.product.price;
                result+=price;
            }
            else {
                let price = item.quantity*item.product.price
                result+=price;
            }
        });
        return result
    }

    const getWorkTime = () => {
        return 0
    }

    const addItem = (item) => {
        let newitems = [...items,item];
        setItems(newitems);
    }

    const createOrder= () => {
        postOrder();
        
        setitemConfirmModal(true);
    }

    const prepItem = (item) => {
        let result = {
            order_id: currentOrder.id,
            product_id: item.product.id,
            quantity: item.quantity,
            design_details: item.design_details,
            frosting: item.frosting,
            filling: item.filling,
            cake_flavor: item.cake_flavor
        }
        return result
    }   

    const createItems = () => {
        putOrder();
        items.forEach(item => {
            let newItem = prepItem(item)
            console.log(newItem);
            postItem(newItem);
         })
        setitemConfirmModal(false);
    }

    const handleModal = () => {
        itemConfirmModal ? (setitemConfirmModal(false)):setitemConfirmModal(true);
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
            <div className="input-container">
                <Input type = "date" title = "Deliver Date:" name= "deliver_date" value = {formData.deliver_date} onChange={handleInputChange}/>
                <Input title = "Order Notes:" name ="notes" value = {formData.notes} onChange ={handleInputChange} textArea = {true} />
            </div>
            <button onClick ={handleSubmit}>Submit Order Request</button> 
            <Modal title = "" modal = {itemConfirmModal} onClose = {handleModal}>
                Please Confirm Items are Correct
                <button onClick = {handleModal}>CANCEL</button>
                <button onClick = {createItems}>Confirm Items</button> 
            </Modal>
        </div>
     );
}

export default OrderForm;