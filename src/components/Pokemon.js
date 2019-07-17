import React from 'react'

const Pokemon = (props) => {
    return (
        <div>
            {props.pokemonData.name}
            <img onClick={() => {props.release(props.pokemonData.id)}} src={props.pokemonData.img} alt={props.pokemonData.name}/>
        </div>
    )
}

export default Pokemon