const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

class App {
    constructor() {
        this.server = express();

        mongoose.connect("mongodb+srv://devhouse:devhouse@devhouse.4djte3x.mongodb.net/DevHouse?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

module.exports = new App().server;