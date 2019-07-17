import React, {Component} from 'react'

export default class Grass extends Component {
    constructor() {
        super()
        this.state = {
            pokemonName: '',
            pokemonImg: ''
        }
    }

    render() {
        return (
            <div>
                {this.props.pokeData.name}
                <img src={this.props.pokeData.sprites.front_shiny} alt={this.props.pokeData.name}/>
            </div>
        )
    }
}