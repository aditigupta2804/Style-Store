import React from 'react';

const Cart = ({ cartItems, onClose, onRemove, onBuy }) => {
  // [Q1] & [Q6] Calculate Total
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  
  // [Q6] Discount Logic: If total > 1000, apply 10% off
  const discountAmount = subtotal > 1000 ? subtotal * 0.10 : 0;
  const finalTotal = subtotal - discountAmount;

  return (
    <div className="modal">
      <div className="modal-content" style={{ width: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Shopping Cart ({cartItems.length})</h2>
            <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>✖</button>
        </div>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '15px', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.title}</div>
                  <div style={{ color: '#B12704', fontWeight: 'bold' }}>₹{item.price}</div>
                </div>
                <button 
                  onClick={() => onRemove(index)} 
                  style={{ background: 'none', border: '1px solid #ddd', padding: '5px 10px', borderRadius: '5px', height: 'fit-content', cursor: 'pointer' }}>
                  Delete
                </button>
              </div>
            ))}
            
            {/* [Q6] Display Cost and Discount */}
            <div style={{ textAlign: 'right', marginTop: '20px', fontSize: '16px', borderTop: '2px solid #ddd', paddingTop:'10px' }}>
              <div>Subtotal: ₹{subtotal}</div>
              {discountAmount > 0 && (
                <div style={{ color: 'green' }}>Discount (10%): - ₹{discountAmount.toFixed(2)}</div>
              )}
              <div style={{ fontSize: '20px', marginTop:'5px' }}>
                  <strong>Final Total: ₹{finalTotal.toFixed(2)}</strong>
              </div>
            </div>
            
            <button 
              className="btn buy-now-btn" 
              style={{ width: '100%', marginTop: '15px', padding: '12px' }}
              onClick={() => onBuy(cartItems[0])} 
            >
              Proceed to Buy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;