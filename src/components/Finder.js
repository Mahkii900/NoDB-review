import React, {Component} from 'react'
import Grass from './Grass'
import Axios from 'axios';

export default class Finder extends Component {
    constructor() {
        super()
        this.state = {
            grassArr: []
        }
    }

    componentDidMount() {
        Axios.get('/api/grass').then(res => {
            this.setState({grassArr: res.data})
        })
    }

    render() {
        return (
            <div>
                {this.state.grassArr.map(pokemon => (
                    <Grass key={pokemon.name} pokeData={pokemon}/>
                ))}
            </div>
        )
    }
}