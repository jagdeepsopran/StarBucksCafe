import React, { useContext } from 'react'
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './contact.css'
import { clickContext, themeContext } from '../../App';
const Contact = () => {
      const theme = useContext(themeContext);
      const toggleTheme = useContext(clickContext);
  const submitHandler = (e) => {
    e.preventDefault()
    // console.log('Form submitted');
  }
  return (
    <div className={`contact-container ${theme==="light"?"light":"dark"}`}>
      <div className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="fname">First Name:</label>
          <input type="text" id="fname" name="fname" className="input" required></input>
          <label htmlFor="lname">Last Name:</label>
          <input type="text" id="lname" name="lname" className="input" required></input>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="input" required></input>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          <input type="submit" value="Submit" className="submit-btn"></input>
        </form>
      </div>
      <div className="contact-detials">
        <h2>Contact Details</h2>
        <p>Starbucks Coffee Company<br /> 123 Main St.<br /> City, State 12345<br/> USA</p>
        <p>Phone: +1 123-456-7890</p>
        <p className="p-email">Email: <a href="mailto:contact@starbucks.com">contact@starbucks.com</a></p>
        <div className="social-icons">
          <h3>Follow On Social Media</h3>
          <a href="https://www.facebook.com/Starbucks/"><FaFacebookF /></a>
          <a href="https://twitter.com/Starbucks"><FaTwitter /></a>
          <a href="https://www.instagram.com/starbucks_sa/"><FaInstagramSquare /></a>
        </div>
      </div>
      <div className="circle"></div>
      <div className="circle1"></div>
    </div>
  )
}

export default Contact