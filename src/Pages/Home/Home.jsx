import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import SolveSection from './SolveSection/SolveSection';
import Testimonial from './Testimonial/Testimonial';
import GapSection from './GapSection/GapSection';
import ImageSection from './ImageSection/ImageSection';
import Chart from './Chart/Chart';

const Home = () => {
    return (
        <div className='overflow-hidden'>
           <HeroSection></HeroSection>
           <GapSection></GapSection>
           <ImageSection></ImageSection>
           <SolveSection></SolveSection>
           <Testimonial></Testimonial>
           <Chart></Chart>
        </div>
    );
};

export default Home;