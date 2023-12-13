import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../Shared/Headers/Headers';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Main = () => {

    useEffect(() => {
        AOS.init();
    },[])

    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;