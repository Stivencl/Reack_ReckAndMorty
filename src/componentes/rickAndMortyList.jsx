
import { useEffect, useState } from "react";

import{Modalf} from "./modal";
import { CharacterDetail } from "./CharacterDetail";
import { getAllRycky } from "../servicios/ryckyServices";
import { Grid2 } from "@mui/material";

function RickAndMortyList() {
    const [rymdata, setRyMData] = useState([]);
    const [characterId, setCharacterId] = useState(null)
    const [status, setStatus] = useState(false)
    const apiURL = 'https://rickandmortyapi.com/api/character';

    useEffect(() => {
        async function fetchData() {
            let response = await getAllRycky(apiURL);
            console.log(response);
            setRyMData(response.results);
        }
        fetchData();
    }, [])

    const handleCharacterClick = (characterId) => {
        setCharacterId(characterId)
        setStatus(true)
    }

    const handleClose = () => {
        setStatus(false)
    }


    return (
        <div>
        
            <Grid2 container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                  {rymdata.map((rym) => (
                    <Grid2 key={rym.id} onClick={() => handleCharacterClick(rym.id)} size={{xs: 2, sm: 4, md: 4}}>
                        <h2>{rym.name}</h2>
                        <p>Status: {rym.status}</p>
                        <img src={rym.image} alt={rym.name} />
                        
                    </Grid2>
                ))}

            </Grid2>

            <Modalf status={status} handleClose={handleClose} >
                <CharacterDetail characterId={characterId} />
            </Modalf>
        </div>
    )

}



export default RickAndMortyList;


