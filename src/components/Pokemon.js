import React, {Component} from 'react'

class Pokemon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.pokemonData.name,
            editing: false
        }
    }

    toggleEdit() {
        this.setState({editing: !this.state.editing})
    }

    handleChange(e) {
        this.setState({name: e.target.value})
    }

    save() {
        this.props.saveFn(this.props.pokemonData.id, {name: this.state.name})
        this.toggleEdit()
    }

    render() {
        return (
            <div>
                {this.state.editing ? (
                    <div>
                        <input type='text' value={this.state.name} onChange={e => this.handleChange(e)}/>
                        <button onClick={() => this.save()}>Save</button>
                        <button onClick={() => this.toggleEdit()}>Cancel</button>
                    </div>
                ):(
                    <h3 onClick={() => this.toggleEdit()}>{this.state.name}</h3>
                )}
                <img src={this.props.pokemonData.img} alt={this.state.name}/>
                <button onClick={() => {this.props.release(this.props.pokemonData.id)}}>Release</button>
            </div>
        )
    }
}

export default Pokemon