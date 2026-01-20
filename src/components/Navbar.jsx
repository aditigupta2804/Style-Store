import React from 'react';

const Navbar = ({ cartCount, onSearch, goHome, openCart }) => {
  return (
    <header>
      <div className="logo" onClick={goHome}>Style Store</div>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search Style Store..." 
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="search-icon"><i className="fas fa-search"></i></div>
      </div>
      <div className="nav-icons">
        <div className="nav-item">
          <small>Hello, User</small><br /><strong>Account</strong>
        </div>
        <div className="nav-item">
          <strong>Returns</strong><br />& Orders
        </div>
        <div className="nav-item" onClick={openCart}>
          <i className="fas fa-shopping-cart" style={{ fontSize: '24px' }}></i>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;