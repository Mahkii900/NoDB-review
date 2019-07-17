const pokemonCaught = [
    {
      name: 'Dratini',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/147.png'
    },
    {
      name: 'Rhydon',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/112.png'
    },
    {
      name: 'Magneton',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/82.png'
    }
]

module.exports = {
    getAll: (req, res) => {
        res.status(200).send(pokemonCaught)
    }
}