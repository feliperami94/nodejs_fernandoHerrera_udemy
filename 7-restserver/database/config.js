const mongoose = require('mongoose');

const dbConnection = async() =>{
    try {
        await mongoose.connect('mongodb+srv://feliperamirezrivera:lQkRQybixLMliKem@sofkaucalendar.ibfyo.mongodb.net/dbName', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        });

        console.log('Database online');
        
    } catch (error) {
        console.log(error)
        throw new Error('Error in the initialization of the DB')
    }

}

module.exports = {
    dbConnection
}