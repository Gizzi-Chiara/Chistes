const express = require("express");
const app = express();

require("./server/config/mongoose.config")

app.use(express.json(), express.urlencoded({extended: true}));

const myRoutes = require("./server/routes/jokes.routes");
myRoutes(app);

app.listen(8000, () => {
    console.log("Servidor corriendo");
})