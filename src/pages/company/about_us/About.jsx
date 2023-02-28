import HeroSection from './hero-section/HeroSection';
import AboutSection from '../../landing-page/about-section/AboutSection';

const AboutPage = () =>{
  return(
    <section>
    <HeroSection/>
    <section className='pt-5'>
    <AboutSection/>
    </section>
    </section>
    )
}

export default AboutPage