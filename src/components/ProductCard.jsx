import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="view-details">
            View Details
          </Link>
          <button onClick={() => addToCart(product)} className="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;