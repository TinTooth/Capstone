import "./Product.css"

const Product = ({product,image}) => {
    return (
        <div className="product-info">
            {product.name}
        </div>
      );
}
 
export default Product;