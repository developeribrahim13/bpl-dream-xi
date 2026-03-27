import { Trash2 } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

const SelectedPlayers = ({selected, setSelected, tk, setTk,}) => {
    const handleDeleteSelected = (plyr) => {
        setTk(tk+plyr.price)
        const dlt = selected.filter(elmnt=> elmnt.id!=plyr.id);
        setSelected(dlt)
        toast(`${plyr.player_name} remove form the list!`)
    }
    return (
        <div>
            {selected.length == 0?
            <div className='flex justify-center  bg-amber-50 rounded-2xl py-8 '>
            <div className='text-center'>
                <p>No Player Selected</p>
                <p>Please Select player form availabe section</p>
            </div>
            </div>:
            selected.map(p=>{
                return(
                    <div key={p.id} className='rounded-2xl bg-linear-[45deg] from-green-100 to-amber-100 w-full px-3 py-6 mb-3.5'>
                        <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <img src={p.player_img} alt={p.player_name} width={60} className='rounded-full'></img>
                            <div>
                                <p className='font-bold text-pink-600'>{p.player_name}</p>
                                <p>{p.player_role}</p>
                            </div>
                        </div>
                        <button onClick={()=>handleDeleteSelected(p)} className='btn rounded-full w-[50px] h-[50px] hover:text-red-600'><Trash2></Trash2></button>
                       </div>
                    </div>
                )
            })
         }
        </div>
    );
};

export default SelectedPlayers;