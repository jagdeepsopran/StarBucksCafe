import React, { useContext } from 'react'
import { clickContext, themeContext, variableContext } from '../../App';

const About = () => {
  const theme = useContext(themeContext);
  const toggleTheme = useContext(clickContext);
  const { cssVariables, handleThumbnailClick } = useContext(variableContext);
  return (
    <div className={`about ${theme === "light" ? "light" : "dark"}`}>
      <div className="circle"></div>
      <div className="circle1"></div>
      <p className='about-para'>
        Starbucks is a globally recognized coffeehouse chain known for its premium coffee, handcrafted beverages, and cozy ambiance. Founded in 1971 in Seattle, Washington, Starbucks has grown to over 34,000 locations worldwide, offering a wide variety of coffee blends, teas, snacks, and merchandise. It is renowned for its customer-centric experience, sustainability initiatives, and innovative loyalty programs, making it a leader in the global coffee industry.</p></div>
  )
}

export default About