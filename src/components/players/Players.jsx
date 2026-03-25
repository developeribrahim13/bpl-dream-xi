import React, { Suspense } from 'react';
import AvailablePlayers from './availableplayers/AvailablePlayers';

const fetchPlayers = fetch('/public/players.json')
.then(res => res.json())

const Players = () => {
    return (
        <div className='max-w-[90%] mx-auto font-sora'>
            <div className='flex justify-between items-center'>
                <p className='text-[28px] font-bold'>Available Players</p>
                <div className='flex'>
                    <button className='btn bg-lime-300'>Available</button>
                    <button className='btn'>Selected (0)</button>
                </div>
            </div>
            <Suspense fallback={<p>Players Loading.....</p>}>
            <AvailablePlayers fetchPlayers={fetchPlayers}/>
            </Suspense>
        </div>
    );
};

export default Players;