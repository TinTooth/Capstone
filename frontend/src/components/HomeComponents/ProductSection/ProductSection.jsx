import Product from "../../HomeComponents/Product/Product";
import "./ProductSection.css"

const ProductSection = ({thisref, productData ,images}) => {
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
        </div>
      ): null;
}
 
export default ProductSection;