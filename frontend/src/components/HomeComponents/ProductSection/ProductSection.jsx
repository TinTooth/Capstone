import Product from "../../HomeComponents/Product/Product";
import { useNavigate } from "react-router-dom";
import "./ProductSection.css"

const ProductSection = ({thisref, productData ,images}) => {
    const navigate = useNavigate()

    const handleOrderClick = () => {
        console.log("NAVIGATE TO ORDER PAGE")
        // navigate('path goes here')
    }

    return productData.length ?(
        
        <div className="product-section-container" ref = {thisref}>
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
                <button>Flavors and Sizes</button>
                <button onClick={handleOrderClick}>Order</button>
            </div>
        </div>
        
      ): null;
}
 
export default ProductSection;