import Product from "../../HomeComponents/Product/Product";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductSection.css"
import Modal from "../../Util/Modal/Modal";
import Menu from "../../HomeComponents/Menu/Menu"

const ProductSection = ({thisref, productData ,images}) => {
    const navigate = useNavigate()
    const [modal,setModal] = useState(false);

    const handleOrderClick = () => {
        navigate('/order');
    }

    const handleModal = () =>{
        modal ? (setModal(false)):setModal(true);
    }

    return productData.length ?(
        
        <div className="product-section-container" ref = {thisref}>
            <Modal title={`${productData[0].type} Menu`} modal = {modal} onClose ={handleModal} >
                <Menu type = {productData[0].type} close = {handleModal}/>
                </Modal>
            <div className="section-name"> {productData[0].type}</div>
            <div className="products-container">

            {productData.map((p,i) => {
                return (
                    <div className = "product" key= {i}>
                    <Product product = {p} image = {images[i]}/>
                </div>
                )
            })}
            </div>
            <div className="buttons-container">
                {productData[0].type === "Cakes" || productData[0].type === "Cupcakes" ? (
                <button onClick = {handleModal}>Flavors and Sizes</button>):null}
                <button onClick={handleOrderClick}>Order</button>
            </div>
        </div>
        
      ): null;
}
 
export default ProductSection;