import React, { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Products from './components/products/Products'
import Contact from './components/contact/Contact'
import Queries from './components/queries/Queries'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/about/About'


export const themeContext = createContext();
export const clickContext = createContext();
export const variableContext = createContext();
// export const thumbClickContext = createContext();


const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [cssVariables, setCssVariables] = useState('#017143');

  const handleThumbnailClick = (textColor) => {
    setCssVariables(textColor);
  };

  return (
    <BrowserRouter>
      <clickContext.Provider value={toggleTheme}>
        <themeContext.Provider value={theme}>
          <variableContext.Provider value={{ cssVariables, handleThumbnailClick }}>
            <Routes>
              <Route exact path='/' element={<Navbar />}>
                <Route path='/' element={<Home />} />
                <Route path='/Products' element={<Products />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Queries' element={<Queries />} />
              </Route>
              <Route path='/*' element={<h1>Page Not Found</h1>} />
            </Routes>
          </variableContext.Provider>
        </themeContext.Provider>
      </clickContext.Provider>
    </BrowserRouter>
  )
}

export default App