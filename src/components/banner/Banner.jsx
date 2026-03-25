import React from 'react';
import bnr  from '../../assets/banner-main.png';
const Banner = () => {
    return (
        <div className='max-w-[90%] mx-auto font-sora bg rounded-3xl py-10 mb-13'>
            <img src={bnr} className='flex mx-auto'></img>
            <h1 className='text-white font-bold text-[40px] text-center my-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-2xl font-medium text-white/70 text-center'>Beyond Boundaries Beyond Limits</p>
            <div className='flex justify-center mt-6'>
            <div className='inline-flex justify-center p-1 border border-lime-300 rounded-2xl'>
                <button className='btn bg-lime-300 rounded-2xl'>Claim Free Credit</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;