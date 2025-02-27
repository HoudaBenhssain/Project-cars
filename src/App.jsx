import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Cars from "./Pages/Cars"



function App() {
  return (
    <Router>
      
        <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
        
      </div>
    </Router>
      
      
    
  )
}

export default App








