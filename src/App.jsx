
//react components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

 import {Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/landing-page/Landingpage";
import ServicePage from "./pages/services/service/Service"
import IndustryPage from "./pages/services/industries/Industries";
//page under company
import AboutPage from "./pages/company/about_us/About";
import HowItWorkPage from "./pages/company/how_it-works/HowItWork";
import TeamPage from "./pages/company/team/Team";
import AwardPage from "./pages/company/award/Award";
import ReviewPage from "./pages/company/review/Review";
import PricingPage from "./pages/company/pricing/Pricing";
import FAQPage from "./pages/company/faq/Faq";
import GalleryPage from "./pages/company/gallery/Gallery";
import ContactPage from "./pages/company/contact_us/Contact";



//detail page
import ServiceDetails from "./pages/serviceDetails/ServiceDetail";
import IndustriesDetail  from "./pages/industriesDetails/IndustriesDetails";



function App() {
  return (
    <div className="app">
   <Navbar />
      <Routes>
        {/* pages */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/industries" element={<IndustryPage/>} />
      
      {/*pages under company*/}
<Route path="/about" element={<AboutPage/>} />
<Route path="/howitworks" element={<HowItWorkPage/>} />
<Route path="/team" element={<TeamPage/>} />
<Route path ="/award" element={<AwardPage/>} />
<Route path="/review" element={<ReviewPage/>} />
<Route path="/pricing" element={<PricingPage/>} />
<Route path="/faq" element={<FAQPage/>} />
<Route path="/gallery" element={<GalleryPage/>} />
<Route path="/contact" element={<ContactPage/>} />


    <Route path="/services/:title" element={<ServiceDetails />} />
    <Route path="/industries/:title" element={<IndustriesDetail/>} />
</Routes>
    <Footer/>
    </div>
  )
}

export default App
