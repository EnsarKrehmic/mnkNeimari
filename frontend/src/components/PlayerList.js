import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PlayerList() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/players')
            .then(res => setPlayers(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Lista Igrača</h1>
            <ul>
                {players.map(player => (
                    <li key={player.id}>{player.firstName} {player.lastName} - {player.position}</li>
                ))}
            </ul>
        </div>
    );
}

export default PlayerList;