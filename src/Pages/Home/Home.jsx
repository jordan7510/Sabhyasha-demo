import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import SolveSection from './SolveSection/SolveSection';
import Testimonial from './Testimonial/Testimonial';
import GapSection from './GapSection/GapSection';
import ImageSection from './ImageSection/ImageSection';

const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <GapSection></GapSection>
           <SolveSection></SolveSection>
           <Testimonial></Testimonial>
           <ImageSection></ImageSection>
        </div>
    );
};

export default Home;