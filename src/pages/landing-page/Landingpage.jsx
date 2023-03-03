
import HeroSection from './hero-section/HeroSection';
import AboutSection from './about-section/AboutSection';
import WorkSection from './project/Project';
import SmartHomeSection from './smarthome/SmartHome';
import IntegratedSecuritySection from './intergratedServices/IntegratedServices';
import QuoteSectionPage from './quotesection/QuoteSecton';
import BlogSection from '../../components/blogs/Blogs';
import Contact from "./contact/Contact"
import CommitmentSection from '../../components/commitment/Commitment';

const LandingPage = () =>{
  return(
    <>
    <HeroSection/>
   <AboutSection/>
   <WorkSection/>
   <SmartHomeSection/>
   <IntegratedSecuritySection/>
   <QuoteSectionPage/>
    <BlogSection/>
    <CommitmentSection/>
    <Contact/>
    </>
    )
}

export default LandingPage