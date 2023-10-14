import Homepage from "../../pages"
import Navbar from "../Navbar"
import { Routes, Route } from "react-router-dom"

export const App = () => {
  return (
      <>
          <Navbar />
          <Routes>
              <Route path="/" element={<Homepage/>} />
          </Routes>
      </>
  )
}

export default App
