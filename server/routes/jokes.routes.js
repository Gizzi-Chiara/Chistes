const JokeController = require("../controllers/jokes.controllers");

module.exports = app => {
    app.get("/api/joke", JokeController.showJokes);
    app.get("/api/jokes/:id", JokeController.showOneJoke);
    app.post("/api/joke", JokeController.createJoke);
    app.put("/api/joke/:id", JokeController.updateJoke);
    app.delete("/api/joke/:id", JokeController.deleteJoke);
}