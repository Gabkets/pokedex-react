import React, { Component } from 'react';
import Services from '../../../Services/Services';

class Pokecard extends Component {
    constructor(props) {
        super(props);
        this.props.pokemon.sprite = '';
        this.state = {
            pokemon: this.props.pokemon
        }
    }

    componentWillMount() {
        this.props.pokemon.sprite = Services.spritesReq(this.state.pokemon.pokeId);
        this.setState({
            pokemon: this.props.pokemon
        })
    }


    render() { 
        const pokemon = this.props.pokemon;
        let spriteEmpty = pokemon.sprite === '';

        return (
            <article className="pokecard">
                {spriteEmpty
                    ? <span>loading</span>
                    : <img src={pokemon.sprite} alt="" className="pokecard__sprite"/>    
                }
                
                <h1>{pokemon.name}</h1>
                <div>
                    <h2>Type: Normal</h2>
                </div>
                <footer>
                    <ul className="pokecard__actions">
                        <button>f</button>
                        <button>t</button>
                        <button>Info</button>
                    </ul>
                </footer>
            </article>
        );
    }
}
 
export default Pokecard;