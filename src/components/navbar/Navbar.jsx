import React from 'react';
import logo from '../../assets/logo.png';
import { CircleDollarSign } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='max-w-[90%] mx-auto font-sora pt-7 pb-5'>
            <div className='flex justify-between items-center'>
                <img src={logo}></img>
            <ul className='flex justify-center gap-12 items-center text-base text-[#131313]/70'>
                <li><a className='hover:underline hover:decoration-green-400' href='#'>Home</a></li>
                <li><a className='hover:underline hover:decoration-amber-500' href='#'>Fixture</a></li>
                <li><a className='hover:underline hover:decoration-purple-400' href='#'>Team</a></li>
                <li><a className='hover:underline hover:decoration-blue-400' href='#'>Sehedules</a></li>
            </ul>
            <button className='btn'>62000 Coin <CircleDollarSign size={16} color="#EAB308" strokeWidth={2.5} /></button>
            </div>
        </div>
    );
};

export default Navbar;