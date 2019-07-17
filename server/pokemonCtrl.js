const pokemonCaught = [
    {
      id: 1,
      name: 'Dratini',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/147.png'
    },
    {
      id: 2,
      name: 'Rhydon',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/112.png'
    },
    {
      id: 3,  
      name: 'Magneton',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/82.png'
    }
]
let id = 4

module.exports = {
    getAll: (req, res) => {
        res.status(200).send(pokemonCaught)
    },
    
    catch(req, res) {
        pokemonCaught.push({...req.body, id: id})
        id++
        res.status(200).send(pokemonCaught)
    },

    delete(req, res) {
        const {id} = req.params
        const index = pokemonCaught.findIndex(pokemon =>
            pokemon.id === parseInt(id))
        pokemonCaught.splice(index, 1)
        res.status(200).send(pokemonCaught)
    },

    rename(req, res) {
        const {id} = req.params
        const {name} = req.body
        const index = pokemonCaught.findIndex(pokemon =>
            pokemon.id === parseInt(id))
        pokemonCaught[index].name = name
        res.status(200).send(pokemonCaught)
    }
}