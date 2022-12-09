import Modal from "../../Util/Modal/Modal"
import { useState } from "react";

const ProductModal = ({setItem, product}) => {
    const [modal, setModal] = useState(false);
    const handleModal = () =>{
        modal ? (setModal(false)):setModal(true);
    }
    return (
        <>
        <button onClick = {handleModal}>ADD</button>
        <Modal title ={product.name} modal = {modal} onClose = {handleModal} >Hello</Modal>
        </>
      );
}
 
export default ProductModal;