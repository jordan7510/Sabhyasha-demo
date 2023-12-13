import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import SolveSection from './SolveSection/SolveSection';
import GapSection from './GapSection/GapSection';

const Home = () => {
    return (
        <div>
           {/* <HeroSection></HeroSection> */}
           <GapSection></GapSection>
           <SolveSection></SolveSection>
        </div>
    );
};

export default Home;