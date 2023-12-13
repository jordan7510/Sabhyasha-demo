import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import SolveSection from './SolveSection/SolveSection';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <Testimonial></Testimonial>
           <SolveSection></SolveSection>
        </div>
    );
};

export default Home;