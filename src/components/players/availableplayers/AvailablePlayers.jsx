import Card from './card/Card';

const AvailablePlayers = ({players, tk, setTk, selected, setSelected, disable, setDisable}) => {
    return (
        <div>
            <Card
             players={players}
             tk={tk}
             setTk={setTk}
             selected={selected}
             setSelected={setSelected}
             disable={disable}
             setDisable={setDisable}></Card>
        </div>
    );
};

export default AvailablePlayers;