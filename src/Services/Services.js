import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2';

const services = {
    getPokeList: (callback, offset) => {
        axios.get(`${baseUrl}/pokemon/${offset}`).then((data)=>{
            let pokemons = data.data.results;

            pokemons.forEach(pokemon => {
                let pokeId = pokemon.url.split('/')[6];
                pokemon.pokeId = pokeId;
            });

            callback(pokemons);
        });
    },

    spritesReq: (id) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }
};



export default services;