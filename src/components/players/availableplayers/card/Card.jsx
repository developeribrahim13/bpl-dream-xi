import React from 'react';

const Card = ({Players}) => {
    return (
        <div>
            {Players.map(player => {
                console.log(player)
            }
            )}
        </div>
    );
};

export default Card;