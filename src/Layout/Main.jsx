import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../Shared/Headers/Headers';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from '../Shared/Footer/Footer';
const Main = () => {

    useEffect(() => {
        AOS.init();
    },[])

    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;