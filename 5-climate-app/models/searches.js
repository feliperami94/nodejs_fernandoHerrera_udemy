const axios = require('axios');

class Searches {
    history = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor(){
        //TODO Leer DB
    }

    async city(place = ''){

        try {
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);
            
            return []; //Return the places that match the search
        } catch (error) {
            return [];
        }

    }

}

module.exports = {
    Searches
}