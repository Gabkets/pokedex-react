import React, { Component } from 'react';
import Pokesearch from '../Pokesearch/Pokesearch';
import Pokelist from '../Pokelist/Pokelist';
import Services from '../../Services/Services';


class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            searchTxt: '',
            allPokemons: []
        }
    }
    
    componentWillMount() {
        Services.getPokeList((pokemons) => {
            this.setState({
                pokemons: pokemons,
                allPokemons: pokemons
            })
        }, '?offset=0&limit=897');
    }

    handleChangeSearch = (event) => {
        let text = event.target.value.toLowerCase();
        let pokemons = this.state.allPokemons.filter((pokemon) => {
           return pokemon.name.startsWith(text);
        });

        this.setState({
            searchTxt: text,
            pokemons: pokemons
        })
    }

    render() {
        return (
            <main className="pokedex">
                <Pokesearch searchTxt={this.state.searchTxt} handleChangeSearch={this.handleChangeSearch}/>
                <Pokelist pokeList={this.state.pokemons}/>                
            </main>
        );
    }
}

export default Pokedex;