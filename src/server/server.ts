import express = require('express');
import path = require('path');

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

    private publicFolder() {
        const publicPath = path.resolve(__dirname, '../public')
        this.app.use(express.static(publicPath))
    }

    start(callback: () => void): void {
        this.app.listen(this.port, callback)
        this.publicFolder();
    }
}