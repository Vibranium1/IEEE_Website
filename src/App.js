import Navbar from "./Navbar"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Magazine from "./pages/Magazine"
import Membership from "./pages/Membership"
import Team from "./pages/Team"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App