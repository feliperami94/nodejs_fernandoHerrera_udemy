const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        
        //Connect to DB
        this.connectDB();

        //Middlewares
        this.middlewares();
        this.routes(); //When instanciating a new express server, will run routes(), configuring all the routes
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Read and parsing the body
        this.app.use(express.json() );

        //Public directory
        this.app.use( express.static('public') );

    }

    routes(){
       this.app.use(this.usersPath, require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on: ', this.port)
        })
    }
}

module.exports = Server