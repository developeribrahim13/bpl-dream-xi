import React, { Suspense, useState } from 'react';
import AvailablePlayers from './availableplayers/AvailablePlayers';
import SelectedPlayers from './selectedplayers/SelectedPlayers';
import { SeparatorVerticalIcon } from 'lucide-react';

const Players = ({tk, setTk}) => {

const fetchPlayers = fetch('/public/players.json')
.then(res => res.json())

const [available, setAvailable] = useState(true)
const [selected, setSelected] = useState([])

    return (
        <div className='max-w-[90%] mx-auto font-sora'>
            <div className='flex justify-between items-center mb-6'>
                <p className='text-[28px] font-bold'>{available?"Available Players":"Selected Player (0/4)"}</p>
                <div className='flex'>
                    <button onClick={()=>setAvailable(true)} className={`btn ${available?"bg-lime-300":""}`}>Available</button>
                    <button onClick={()=>setAvailable(false)} className={`btn ${!available?"bg-lime-300":""}`}>Selected (0)</button>
                </div>
            </div>
            <Suspense fallback={<p>Players Loading.....</p>}>
            {available?<AvailablePlayers fetchPlayers={fetchPlayers} tk={tk} setTk={setTk} selected={selected} setSelected={setSelected}/>:
            <SelectedPlayers selected={selected} setSelected={setSelected}></SelectedPlayers>}
            </Suspense>
        </div>
    );
};

export default Players;