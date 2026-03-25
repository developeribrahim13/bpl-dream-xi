import React, { use } from 'react';
import Card from './card/Card';

const AvailablePlayers = ({fetchPlayers}) => {
    const Players = use(fetchPlayers);
    return (
        <div>
            <Card Players={Players}></Card>
        </div>
    );
};

export default AvailablePlayers;