
//react components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

 import {Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/landing-page/Landingpage";

function App() {
  return (
    <div className="app">
   <Navbar />
      <Routes>
        {/* pages */}
        <Route path="/" element={<LandingPage />} />
</Routes>
    <Footer/>
    </div>
  )
}

export default App
