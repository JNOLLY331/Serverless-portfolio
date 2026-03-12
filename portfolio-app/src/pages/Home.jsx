import React from 'react';
import {ToggleTheme} from '../components/ToggleTheme' 
import { StarBackground } from '../components/StarBackground';  
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import {Projects} from '../components/Projects'
import {ContactSection} from '../components/ContactSection'
import {Footer} from '../components/Footer'
import Education from '../components/Education';

const Home = () => {
  return (
    <div className='min-h-screen'>
        <ToggleTheme/>
        <StarBackground />
        <Navbar />
        <HeroSection />
        <AboutSection  />
        <Education />
        <SkillsSection  />
        <Projects  />
        <ContactSection  />
        <Footer />
    </div>
  );
}

export default Home;

