import React, { useState } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Success from './components/Success';
import Cart from './components/Cart';
import { products as initialProducts } from './data';
import './index.css';

function App() {
  const [view, setView] = useState('login'); 
  const [cartItems, setCartItems] = useState([]); 
  const [products, setProducts] = useState(initialProducts);
  const [orderedProduct, setOrderedProduct] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [tempProduct, setTempProduct] = useState(null);

  /* --- [Q3, Q4, Q5, Q7] Exam States (Commented Out) ---
  const [showFeedback, setShowFeedback] = useState(true);
  const [feedback, setFeedback] = useState({ email: '', mobile: '', message: '' });
  const [submitMsg, setSubmitMsg] = useState('');
  ---------------------------------------------------- */

  const handleLogin = (email) => setView('home');

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
    alert("Added to cart!");
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const openCart = () => setShowCartModal(true);

  const handleBuyNow = (product) => {
    setTempProduct(product); 
    setShowCartModal(false); 
    setShowPaymentModal(true);
  };

  const handleCheckoutFromCart = () => {
    if(cartItems.length > 0){
        setTempProduct(cartItems[0]); 
        setShowCartModal(false);
        setShowPaymentModal(true);
    }
  };

  const confirmOrder = () => {
    setShowPaymentModal(false);
    if (!tempProduct) { 
         setOrderedProduct(cartItems[0]); 
         setCartItems([]);
    } else {
         setOrderedProduct(tempProduct);
    }
    setView('success');
  };

  const filterProducts = (category) => {
    if (category === 'All') setProducts(initialProducts);
    else setProducts(initialProducts.filter(p => p.category === category));
  };

  const searchProducts = (text) => {
    setProducts(initialProducts.filter(p => p.title.toLowerCase().includes(text.toLowerCase())));
  };

  /* --- [Q3, Q4, Q7] Exam Logic (Commented Out) ---
  const handleFeedbackSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(feedback.email)) {
        alert("Invalid Email Address!");
        return;
    }
    if (!mobileRegex.test(feedback.mobile)) {
        alert("Invalid Mobile Number! Must be 10 digits.");
        return;
    }

    console.log("Saving to backend:", feedback); 
    setFeedback({ email: '', mobile: '', message: '' }); 
    setSubmitMsg("Thank You! Your feedback has been saved successfully."); 
  };

  // [Q8] Exam Logic
  const specialOfferStyle = {
    backgroundColor: '#ff4d4d',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    margin: '20px',
    borderRadius: '10px',
    border: '2px dashed white'
  };
  ----------------------------------------------- */

  return (
    <div className="App">
      {view === 'login' && <Login onLogin={handleLogin} />}

      {view === 'home' && (
        <>
          <Navbar 
            cartCount={cartItems.length} 
            onSearch={searchProducts} 
            goHome={() => setProducts(initialProducts)}
            openCart={openCart} 
          />
          
          <div className="filters">
            {['All', 'Men', 'Women', 'Kids', 'Electronics', 'Home'].map(cat => (
              <div key={cat} className="filter-item" onClick={() => filterProducts(cat)}>{cat}</div>
            ))}
          </div>

          <div className="hero-section">
            <div className="hero-overlay">
              <h1>Style Store</h1>
              <p>Discover the Best Trends in Fashion & Electronics</p>
              <button className="shop-now-btn" onClick={() => window.scrollTo({top: 600, behavior: 'smooth'})}>Shop Now</button>
            </div>
          </div>

          {/* --- [Q8] Exam Special Offer (Commented Out) ---
          <div style={specialOfferStyle}>
            <h2>🎉 New Year Special Offer! 🎉</h2>
            <p>Get Flat 10% OFF on orders above ₹1000. Use Code: NEWYEAR2026</p>
          </div>
          ------------------------------------------------ */}

          <div className="main-container">
            <h2>Results</h2>
            <div className="product-grid">
              {products.map(prod => (
                <ProductCard 
                  key={prod.id} 
                  product={prod} 
                  onAddToCart={addToCart} 
                  onBuyNow={handleBuyNow} 
                />
              ))}
            </div>
          </div>

          {/* --- [Q5] Hide/Show Button (Commented Out) ---
          <div style={{textAlign: 'center', margin: '30px'}}>
             <button 
                className="btn login-btn" 
                onClick={() => setShowFeedback(!showFeedback)}
                style={{width: '200px'}}
             >
                {showFeedback ? "Hide Feedback Form" : "Show Feedback Form"}
             </button>
          </div>
          ----------------------------------------------- */}

          {/* --- [Q3, Q4, Q7] Feedback Form (Commented Out) ---
          {showFeedback && (
              <div style={{ backgroundColor: '#fff', padding: '30px', margin: '20px auto', maxWidth: '500px', borderRadius: '8px' }}>
                <h3>Contact Us / Feedback</h3>
                <div className="input-group">
                    <label>Email ID:</label>
                    <input type="text" value={feedback.email} onChange={(e) => setFeedback({...feedback, email: e.target.value})} />
                </div>
                <div className="input-group">
                    <label>Mobile Number:</label>
                    <input type="text" value={feedback.mobile} onChange={(e) => setFeedback({...feedback, mobile: e.target.value})} />
                </div>
                <div className="input-group">
                    <label>Message:</label>
                    <input type="text" value={feedback.message} onChange={(e) => setFeedback({...feedback, message: e.target.value})} />
                </div>
                <button className="btn login-btn" onClick={handleFeedbackSubmit}>Submit Feedback</button>
                
                {submitMsg && <p style={{color: 'green', marginTop: '10px', fontWeight: 'bold'}}>{submitMsg}</p>}
              </div>
          )}
          -------------------------------------------------- */}
        </>
      )}

      {showCartModal && (
        <Cart 
            cartItems={cartItems} 
            onClose={() => setShowCartModal(false)} 
            onRemove={removeFromCart}
            onBuy={handleCheckoutFromCart}
        />
      )}

      {view === 'success' && (
        <Success orderedProduct={orderedProduct} goHome={() => setView('home')} />
      )}

      {showPaymentModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Select Payment Method</h3>
            <div className="payment-option"><input type="radio" name="payment" defaultChecked /> UPI</div>
            <div className="payment-option"><input type="radio" name="payment" /> Card</div>
            <div className="payment-option"><input type="radio" name="payment" /> Pay on Delivery</div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button className="btn login-btn" style={{ background: '#ddd' }} onClick={() => setShowPaymentModal(false)}>Cancel</button>
                <button className="btn login-btn" onClick={confirmOrder}>Place Order</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;