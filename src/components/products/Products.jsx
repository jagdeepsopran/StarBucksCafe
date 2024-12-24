import React, { useContext } from 'react'
import './product.css'
import { clickContext, themeContext, variableContext } from '../../App';
const Products = () => {
  const theme = useContext(themeContext);
  const toggleTheme = useContext(clickContext);
  const { cssVariables, handleThumbnailClick } = useContext(variableContext);
  const product = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
  return (
    <div className={`main ${theme === "light" ? "light" : "dark"}`}>
      <h2>What's New at Starbucks</h2>
      <p>Check out our latest news and updates about Starbucks</p>
      <div className="products-container">
        {
          product.map((item, idx) => {
            return (
              <div key={idx} className="product-card">
                <img src={`../img${item}.png`} alt={`Product Image`} />
                <h3>Product {item}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel urna vel dui pulvinar pulvinar vel non nisi.</p>
                <div className="price-add">
                  <span className="price" >$5.99</span>
                  <button className="add-btn"                                                                                                                                                                                                                                                                                                         >Add Item</button>
                </div>
              </div>
            );
          }
          )}
      </div>
    </div>
  );
};

export default Products