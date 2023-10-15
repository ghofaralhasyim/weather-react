import Homepage from "../../pages"
import Info from "../../pages/info"
import Navbar from "../Navbar"
import { Routes, Route } from "react-router-dom"

export const App = () => {
  return (
      <>
          <Navbar />
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/info" element={<Info/>} />
          </Routes>
      </>
  )
}

export default App
