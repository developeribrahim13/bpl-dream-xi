import React, { Suspense, use, useState } from 'react';
import AvailablePlayers from './availableplayers/AvailablePlayers';
import SelectedPlayers from './selectedplayers/SelectedPlayers';
import { SeparatorVerticalIcon } from 'lucide-react';

const fetchPlayers = fetch('/public/players.json')
.then(res => res.json())

const Players = ({tk, setTk}) => {
const players = use(fetchPlayers)
const [available, setAvailable] = useState(true)
const [selected, setSelected] = useState([])
const [disable,setDisable] = useState(false)
    return (
        <div className='max-w-[90%] mx-auto font-sora'>
            <div className='flex justify-between items-center mb-6'>
                <p className='text-[28px] font-bold'>{available?"Available Players":`Selected Players (${selected.length}/${players.length})`}</p>
                <div className='flex'>
                    <button onClick={()=>setAvailable(true)} className={`btn ${available?"bg-lime-300":""}`}>Available</button>
                    <button onClick={()=>setAvailable(false)} className={`btn ${!available?"bg-lime-300":""}`}>Selected ({selected.length})</button>
                </div>
            </div>
            <Suspense fallback={<p>Players Loading.....</p>}>
            {available?<AvailablePlayers players={players} tk={tk} setTk={setTk} selected={selected} setSelected={setSelected} disable={disable} setDisable={setDisable}/>:
            <SelectedPlayers selected={selected} setSelected={setSelected} tk={tk} setTk={setTk} setDisable={setDisable} ></SelectedPlayers>}
            </Suspense>
        </div>
    );
};

export default Players;