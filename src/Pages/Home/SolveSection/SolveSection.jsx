import React from 'react';
import image from "../../../assets/images/solveImage.jpg"
import image2 from "../../../assets/images/solveimage2.jpg"
import image3 from "../../../assets/images/solveimage3.jpg"


const SolveSection = () => {
    return (
        <div className="flex flex-col bg-[#F8EBE1] min-h-screen font-[200]">
            <div className='py-10'>
                <h2 className='text-5xl text-center'>And </h2>
                    <h2 className='text-4xl text-center'>we are here to solve it so that</h2>
            </div>

            <div className='flex flex-col md:flex-row py-2 px-5 items-center justify-center'>

                <div className='image-section relative flex justify-center align-items-start flex-1 w-full px-5'>
                    <div className='hover:scale-105 duration-500 text-center relative left-8 '>
                        <p className='text-2xl py-2 text-[#C4832A]'>her</p>
                        <img src={image} alt="artisan" className='h-[400px] w-72 ' />
                    </div>

                    <div className=' hover:scale-105 duration-500 text-center pt-10 z-10 '>
                        <p className='text-2xl py-2 text-[#C4832A]'>her</p>
                        <img src={image3} alt="artisan" className='h-[400px] w-72' />
                    </div>
                </div>

                <div className='info-section flex-1 relative'>
                    <div>
                        <h2 className='text-4xl'><span className='text-5xl'>A</span>nd 1000s of others can <span className='text-[#C4832A]'>tap</span> the <span className='text-[#C4832A]'>untapped</span> potential of the <span className='text-[#C4832A]'>$752</span> billion industry.</h2>
                        <div className='w-[145px] my-3 h-1  bg-[#952125]'></div>
                    </div>
                    <div>
                        <h2 className='text-4xl'><span className='text-5xl'>A</span>nd 1000s of others can <span className='text-[#C4832A]'>tap</span> the <span className='text-[#C4832A]'>untapped</span> potential of the <span className='text-[#C4832A]'>$752</span> billion industry.</h2>
                        <div className='w-[145px] my-3 h-1  bg-[#952125]'></div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SolveSection;