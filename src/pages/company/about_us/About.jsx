import HeroSection from './hero-section/HeroSection';
import AboutServices from './services_about/ServiceAbout';
import AboutSection from '../../landing-page/about-section/AboutSection';
import CaseStudySection from '../../../components/case_studies/CaseStudies';
import ProtocolSection from './protocol/Procotol';

import BlogSection from '../../../components/blogs/Blogs';

const AboutPage = () =>{
  return(
    <section>
    <HeroSection/>
    <section className='pt-5'>
    <AboutSection/>
    <AboutServices/>
    <CaseStudySection/>
    <ProtocolSection/>
    <BlogSection/>
    </section>
    </section>
    )
}

export default AboutPage