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
                Grass
            </div>
        )
    }
}