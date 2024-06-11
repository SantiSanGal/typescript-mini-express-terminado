//Para iniciar archivo de configuración de typescript
//tsc --init

//para compilar los archivos 
//tsc 
console.log('código de typescript');

import express = require('express')
import path = require('path')

const app = express();

const publicPath = path.resolve(__dirname, '../public');

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, (err) => {
    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);

});