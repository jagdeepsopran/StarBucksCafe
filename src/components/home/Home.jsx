import React, { useContext } from 'react'
import './home.css'
import { clickContext, themeContext, variableContext } from '../../App';
const Home = () => {

  const theme = useContext(themeContext);
  const toggleTheme = useContext(clickContext);
  const { cssVariables, handleThumbnailClick } = useContext(variableContext);
  return (
    <div className={` ${theme === "light" ? "light" : "dark"} content`}>
      <div className="text-box">
        <h2>It's not just Coffee<br />It's <span id="output" style={{color:`${cssVariables}`}}>Starbucks</span></h2>
        <p className='bg-orange-400'>MAKE EVERY SIP MORE REWARDING <br />
          Join Starbucks Rewards™ to earn Gold level benefits like free drinks and food,
          get free refills, pay and order with your phone, and more.
        </p>
        <ul className="thumbnails">
          <li onClick={() => handleThumbnailClick('#017143')}>
            <img src="../thumb1.png" alt="" />
          </li>
          <li onClick={() => handleThumbnailClick('#ebbcc9')}>
            <img src="../thumb2.png" alt="" />
          </li>
          <li onClick={() => handleThumbnailClick('#9f287b')}>
            <img src="../thumb3.png" alt="" />
          </li>
        </ul>
      </div>
      <div className="image-box">
        <img src={`../img1.png`} alt="" />
      </div>
      <div className="circle" style={{background:`${cssVariables}`}}></div>
    </div>
  )
}

export default Home
