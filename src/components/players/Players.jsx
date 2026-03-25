import React, { Suspense, useState } from 'react';
import AvailablePlayers from './availableplayers/AvailablePlayers';
import SelectedPlayers from './selectedplayers/SelectedPlayers';
import { SeparatorVerticalIcon } from 'lucide-react';

const Players = () => {

const fetchPlayers = fetch('/public/players.json')
.then(res => res.json())

const [available, setAvailable] = useState(true)

    return (
        <div className='max-w-[90%] mx-auto font-sora'>
            <div className='flex justify-between items-center mb-6'>
                <p className='text-[28px] font-bold'>Available Players</p>
                <div className='flex'>
                    <button onClick={()=>setAvailable(true)} className={`btn ${available?"bg-lime-300":""}`}>Available</button>
                    <button onClick={()=>setAvailable(false)} className={`btn ${!available?"bg-lime-300":""}`}>Selected (0)</button>
                </div>
            </div>
            <Suspense fallback={<p>Players Loading.....</p>}>
            {available?<AvailablePlayers fetchPlayers={fetchPlayers}/>:
            <SelectedPlayers></SelectedPlayers>}
            </Suspense>
        </div>
    );
};

export default Players;