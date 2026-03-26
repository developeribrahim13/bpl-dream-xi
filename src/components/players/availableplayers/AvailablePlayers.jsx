import React, { use } from 'react';
import Card from './card/Card';

const AvailablePlayers = ({fetchPlayers, tk, setTk, selected, setSelcted}) => {
    const Players = use(fetchPlayers);
    return (
        <div>
            <Card Players={Players} tk={tk} setTk={setTk}></Card>
        </div>
    );
};

export default AvailablePlayers;