import React, {Component} from 'react'
import Grass from './Grass'

export default class Finder extends Component {
    constructor() {
        super()
        this.state = {
            grassArr: [false, false, false]
        }
    }
    render() {
        return (
            <div>
                <Grass prop='val'/>
                <Grass/>
                <Grass/>
            </div>
        )
    }
}