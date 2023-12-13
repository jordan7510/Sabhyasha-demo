import React from 'react';
import img from "../../../assets/images/embro-img.jpg"


const GapSection = () => {
    return (

        <div className='bg-[#FCF6F3] py-8 font-[200]'>
            {/* <h2 className='text-right text-6xl py-5 pr-5'>Why is there a <span className='text-[#C4832A] '>GAP</span></h2> */}
            <div className='flex flex-col-reverse md:flex-row items-center justify-center'>
                <div className='flex-1'>
                    <div className='py-8 pl-10'>
                        <h2 className='text-right text-5xl'>Because their <span className='text-[#C4832A]'>livelihood</span> <span className='text-[#C4832A]'>heavily</span> depends on</h2>
                    </div>
                    <ul className='space-y-4 py-8 pl-10 text-right'>
                        <li><span className='text-4xl text-[#C4832A]'>Government -</span> <span className='text-xl text-[#5A444B]'>But they cannot support everyone.</span></li>

                        <li><span className='text-4xl text-[#C4832A]' >Trade Fairs -</span> <span className='text-xl text-[#5A444B]'>But every artisan does not access to these.</span></li>

                        <li><span className='text-4xl text-[#C4832A]'>Tourists -</span> <span className='text-xl text-[#5A444B]'>But they do not visit every nook  & corner of the country.</span></li>

                        <li><span className='text-4xl text-[#C4832A]'>The "Middle Man" -</span> <span className='text-xl text-[#5A444B]'>But they do not support the artisans.</span></li>
                    </ul>
                </div>
                <div className='flex-1 flex flex-col relative items-center justify-center mx-auto'>
                    <h2 className='text-5xl py-5 pr-5 '>Why is there a <span className='text-[#C4832A] '>GAP ?</span></h2>
                    <img src={img} className='relative hover:scale-105 duration-500' ></img>
                </div>
            </div>
        </div>

    );
};

export default GapSection;