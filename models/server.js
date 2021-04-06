const express = require('express');
const cors = require('cors');

class Server
{
    constructor()
    {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutesPath = '/api/usuarios';
        //middlawares
        this.middlawares();

        //rutas de  mi aplicacion
        this.routes();
    }

    middlawares()
    {

        //CORS 
        this.app.use(cors());
        //parse y lectura del vbody
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
    }

    routes()
    {
        this.app.use(this.usuariosRoutesPath, require('../routes/user'));
    }


    listen()
    {
        this.app.listen(this.port, ()=> {
            console.log(`servidor corriendo en el puerto ${this.port}`);
        });
    }
}


module.exports = Server;