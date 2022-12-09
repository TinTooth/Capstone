import Modal from "../../Util/Modal/Modal"
import { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";

const ProductModal = ({addItem, product}) => {
    const [modal, setModal] = useState(false);
    const handleModal = () =>{
        modal ? (setModal(false)):setModal(true);
    }
    return (
        <>
        <button onClick = {handleModal}>ADD</button>
        <Modal title ={`${product.name}`} modal = {modal} onClose = {handleModal} >
            <ProductForm product={product} addItem ={addItem}/>
        </Modal>
        </>
      );
}
 
export default ProductModal;