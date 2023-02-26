
//react components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

 import {Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/landing-page/Landingpage";
import ServiceDetails from "./pages/serviceDetails/ServiceDetail"
import ServicePage from "./pages/services/service/Service"


function App() {
  return (
    <div className="app">
   <Navbar />
      <Routes>
        {/* pages */}
        <Route path="/" element={<LandingPage />} />
      <Route path="/services" element={<ServicePage />} />
    <Route path="/services/:id" element={<ServiceDetails />} />
</Routes>
    <Footer/>
    </div>
  )
}

export default App
