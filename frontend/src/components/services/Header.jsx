import React from 'react';
import ZooGate from "../../assets/ServicesImages/ZooGate.jpg";

const Header = () => {
    return (
        <div>
            <div className='relative w-full h-[400px] md:h-[600px]'>
                <img src={ZooGate} alt="Zoo Background" className='w-full h-full object-cover'
                />

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="md:text-7xl text-4xl font-bold">Welcome to <span className='text-green-600'>Wild Zoo</span></h1>
                    <p className="md:text-2xl text-lg mt-4">Explore & Shop for Wildlife Adventures</p>
                </div>

            </div>

        </div>
    );
}

export default Header;
