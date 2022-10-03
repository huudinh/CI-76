import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PokemonDetail = () => {
    const [pokemons, setPokemons] = useState();
    const params = useParams();

    useEffect(()=>{
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            .then((response) => {
                setPokemons(response.data);
            })
    }, [params.name]);

    return (
        <div>
            {pokemons && (
                <div>
                    <p>Name: {pokemons.name}</p>
                    <p>Image: <img src={pokemons.sprites.front_default} /></p>
                </div>
            )}
        </div>
    );
};

export default PokemonDetail;