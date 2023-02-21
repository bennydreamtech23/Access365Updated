
import HeroSection from './hero-section/HeroSection';
import AboutSection from './about-section/AboutSection';
import WorkSection from './project/Project';
import SmartHomeSection from './smarthome/SmartHome';
import IntegratedSecuritySection from './intergratedServices/IntegratedServices';

import QuoteSectionPage from './quotesection/QuoteSecton';
//import Testimonies from './testimonies/Testimonies;

const LandingPage = () =>{
  return(
    <>
    <HeroSection/>
   <AboutSection/>
   <WorkSection/>
   <SmartHomeSection/>
   <IntegratedSecuritySection/>
   <QuoteSectionPage/>
    </>
    )
}

export default LandingPage