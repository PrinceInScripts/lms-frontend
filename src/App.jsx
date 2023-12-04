import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import NotFound from "./pages/NotFound"
import Signup from "./pages/Signup"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
