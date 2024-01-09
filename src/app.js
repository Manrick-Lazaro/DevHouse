import express from "express";
import routes from "./routes";
import mongoose from "mongoose";

class App {
    constructor() {
        this.server = express();

        mongoose.connect("mongodb+srv://devhouse:devhouse@devhouse.4djte3x.mongodb.net/DevHouse?retryWrites=true&w=majority");

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