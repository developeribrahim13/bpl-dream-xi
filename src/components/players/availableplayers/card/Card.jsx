import { toast } from 'react-toastify';

const Card = ({ players, tk, setTk, selected, setSelected }) => {

    const handleSelectedPlayer = (player) => {
        const isSelected = selected.find(p=>p.id==player.id)
        if(isSelected)
            return;
        if(tk<player.price)
           toast.error("Not enough money to buy this player!")
        else{
            setTk(tk-player.price);
            toast.success(`${player.player_name} is added`);
            setSelected([...selected, player])
            }
    }

    return (
        <div className='grid md:grid-cols-3 grid-rows-1 gap-4'>
            {players.map(player => {
                const disable = selected.find(p=>p.id == player.id)
            return (
                <div key={player.id} className="card bg-base-100 shadow-cyan-200 shadow-xs">
                    <figure className='w-full h-[250px]'>
                        <img
                            className='w-full h-full object-cover'
                            src={player.player_img}
                            alt={player.player_name}/>
                    </figure>
                    <div className='p-2 space-y-1 bg-linear-[-45deg] from-cyan-50 to-red-50'>
                        <h1 className='font-bold text-xl'>{player.player_name}</h1>
                            <div className='flex gap-2 items-center'>
                                <img src={player.country_flag_img} width={20}></img>
                                <p className='font-medium'>{player.country_name}</p>
                            </div>
                            <div className='flex justify-between'>
                            <p className='text-green-600 font-semibold'>{player.player_role}</p>
                            <p>Rating: {player.rating}</p>
                            </div>
                            <div className='flex justify-between'>
                            <p>{player.bat_style}</p>
                            <p>{player.bowl_style}</p>
                            </div>
                            <div className='flex justify-between items-center'>
                            <p className='font-medium text-red-900'> Price: ${player.price}</p>
                            <button onClick={() => {handleSelectedPlayer(player)}}
                                className={`btn ${disable?"btn-disabled bg-red-200":""}`}>{`${disable?'Selected':'Chosse player'}`}</button>
                            </div>
                    </div>
                </div>
              )}
            )}
        </div>
    );
};
export default Card;