const axios = require('axios');
require('dotenv').config();

class Searches {
    history = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor(){
        //TODO Leer DB
    }

    get paramsMapBox(){
        return {
            'limit':5,
            'language': 'en',
            'access_token': process.env.MAPBOX_KEY
            // `pk.eyJ1IjoiZmVsaXBlLXJhbWlyZXoiLCJhIjoiY2w2bWUxNzZhMDMwNzNqbXAwaWRvdGc1MiJ9.PzX3QhAcGLGd-sYrdvpFvA`
            }
    }

    async city(place = ''){

        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: this.paramsMapBox
            })

            const resp = await instance.get();

            console.log(resp.data);
            
            return []; //Return the places that match the search
        } catch (error) {
            console.log(error);
            // throw null
        }

    }  

}

module.exports = {
    Searches
}