import express = require('express');

//si se importa aldo de este archivo, esto se va a exportar por defecto
export default class Server {
    public app: express.Application;
    public port: number;

    constructor(puerto: number) {
        this.port = puerto;
        this.app = express();
    }

    //Dispara el constructor y sólo se tiene una instancia de Express
    static init(puerto: number) {
        return new Server(puerto)
    }

    start(callback: () => void): void {
        this.app.listen(this.port, callback)
    }
}