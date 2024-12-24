import React, { useContext } from 'react'
import { clickContext, themeContext } from '../../App';
import './queries.css'

const Queries = () => {
  const theme = useContext(themeContext);
  const toggleTheme = useContext(clickContext);
  const submitHandler = (e) => {
    e.preventDefault()
    // console.log('Form submitted');
  }
  return (
    <div className={`query ${theme === "light" ? "light" : "dark"}`}>
      <div className={`contact`}>
        <h2>Any Queries</h2>
        <p>Please feel free to contact us for any questions or concerns.</p>
        <form onSubmit={submitHandler} className="form-box">
          <label htmlFor="fname">First Name:</label>
          <input type="text" id="fname" name="fname" className="input" required></input>
          <label htmlFor="lname">Last Name:</label>
          <input type="text" id="lname" name="lname" className="input" required></input>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="input" required></input>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <input type="submit" value="Submit" className="submit-btn"></input>
        </form>
      </div>
        <div className="circle"></div>
        <div className="circle1"></div>
    </div>
  )
}

export default Queries