import React from 'react';

const SelectedPlayers = ({selected, setSelcted}) => {
    return (
        <div className='flex justify-center  bg-amber-50 rounded-2xl py-8'>
            <div className='text-center'>
                <p>No Player Selected</p>
                <p>Please Select player form availabe section</p>
            </div>
        </div>
    );
};

export default SelectedPlayers;