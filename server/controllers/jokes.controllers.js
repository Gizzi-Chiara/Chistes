const { model } = require("mongoose");
const Joke = require("../models/jokes.model");

//Obtener todos los chistes
module.exports.showJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({bromas: allJokes}))
        .catch(err => res.json({ message: "Error", error: err }));
}

//Obtener un chiste
module.exports.showOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then(oneJoke => res.json({joke: oneJoke}))
    .catch(err => res.json({ message: "Error", error: err }));
}

//Crear un chiste
module.exports.createJoke = (req, res) => {
    Joke.create = (req.body)
    .then(newJoke => res.json({joke: newJoke}))
    .catch(err => res.json({message: "Error", error: err}))
}

//Actualizare chiste
module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedJoke => res.json({joke: updatedJoke}))
    .catch(err => res.json({message: "Error", error: err}))
}

//Eliminar chiste
module.exports.deleteJoke = (req, res) => {
    Joke.findOneAndDelete({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: "Error", error: err}));
}