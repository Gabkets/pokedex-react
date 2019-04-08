import React, { Component } from 'react';
import Pokecard from './Pokecard/Pokecard';

class Pokelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: []
        }
    }
    
    componentWillReceiveProps(props){
        this.setState({
            pokemons: props.pokeList
        })
    }

    render() {
        let pokemons = this.state.pokemons;

        if(this.state.pokemons.length === 0){
            return (
                <span>Loading</span>
            );
        }else{
            return ( 
                <section className="pokelist">
                    {pokemons.map((pokemon)=>{
                        return(
                            <Pokecard pokemon={pokemon} key={pokemon.pokeId}/>
                        );
                    })}
                </section>  
            );
        }
    }
}
 
export default Pokelist;