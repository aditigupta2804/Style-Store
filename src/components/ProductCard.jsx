import React from 'react';

const ProductCard = ({ product, onAddToCart, onBuyNow }) => {
  return (
    <div className="product-card">
      <div className="img-container">
        {product.bestSeller && <div className="best-seller-tag">#1 Best Seller</div>}
        <img src={product.image} alt={product.title} />
      </div>
      <div className="p-title">{product.title}</div>
      <div className="stars">
        <i className="fas fa-star"></i> <span className="rating-count">({product.reviews})</span>
      </div>
      
      <div className="price-block">
        <span className="discount-text">-{product.discount}%</span>
        <span className="currency-symbol">₹</span>
        <span className="main-price">{product.price}</span>
        <div className="mrp-block">
          M.R.P.: <span className="mrp-strike">₹{product.mrp}</span>
        </div>
      </div>

      <div className="delivery-info">
        FREE delivery <span>Tomorrow</span>
      </div>

      <div className="btn-container">
        <button className="btn add-cart-btn" onClick={() => onAddToCart(product)}>Add to Cart</button>
        <button className="btn buy-now-btn" onClick={() => onBuyNow(product)}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;