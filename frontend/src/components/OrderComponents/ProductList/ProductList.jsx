import ProductModal from "../ProductModal/ProductModal";
import "./ProductList.css"


const ProductList = ({setItem, productName,products}) => {
    
    
    return products.length ? ( 
        <>
        
        <div className="product-list-container">
            <div className="product-heading">{productName}</div>
            {products.map((p,i) =>{
                return p.type === productName ? (
                    <div className="product-row" key ={i}>
                        {p.name}
                        <ProductModal setItem={setItem} product = {p}></ProductModal>
                    </div>
                    ):null
                })}
        </div>
        </>
     ):null;
}
 
export default ProductList;