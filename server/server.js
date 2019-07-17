const express = require('express')
const app = express()
const PORT = 4526

const grassCtrl = require('./grassCtrl')
const pokemonCtrl = require('./pokemonCtrl')

app.get('/api/grass', grassCtrl.getPokemon)
app.get('/api/pokemon', pokemonCtrl.getAll)

app.listen(PORT, () => console.log(`Captain's Log #${PORT}: We are lost in space...`))