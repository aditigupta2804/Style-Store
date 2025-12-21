import React from 'react';

const Success = ({ orderedProduct, goHome }) => {
  return (
    <div id="success-view">
      <div className="success-header">
        <div className="green-check">
          <i className="fas fa-check-circle"></i> Order placed, thank you!
        </div>
        <p style={{ marginTop: '5px', fontSize: '14px' }}>Confirmation will be sent to your email.</p>
      </div>
      
      <div className="order-details">
        <div className="shipping-info">
          <strong>Shipping to User</strong>, Flat no. 204<br />
          Patna, Phone number: 8797335056
        </div>

        <div className="delivery-date-block">
          <div>
            <div className="date-text">Tomorrow, 21 Dec</div>
            <div style={{ fontSize: '14px' }}>Delivery date</div>
          </div>
          <img src={orderedProduct?.image} className="product-thumb" alt="Product" />
        </div>
      </div>
      
      <button className="btn continue-btn" onClick={goHome}>Continue shopping</button>
    </div>
  );
};

export default Success;