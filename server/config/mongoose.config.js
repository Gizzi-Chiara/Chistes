const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useunifiedTopology: true
}).then (()=> console.log("Conexión lista"))
.catch(err => console.log("Error en conexión", err));