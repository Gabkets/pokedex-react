import React, { Component } from 'react';

class PokeSearch extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <article className="pokeasearch">
                <form>
                    <div>
                        <label htmlFor="">Search by name</label>
                        <input type="text" value={this.props.searchTxt} onChange={this.props.handleChangeSearch} className="pokesearch__txtsearch"/>
                    </div>
                    <div>
                        <input type="checkbox" className="pokesearch__checkbox"></input>
                        <label htmlFor="">Only already catched</label>
                    </div>
                    <div>
                        <button className="pokesearch__action-search">
                            Search
                        </button>
                    </div>
                </form>
            </article>
        );
    }
}
 
export default PokeSearch;