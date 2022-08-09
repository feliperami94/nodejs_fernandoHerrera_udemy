const fs = require('fs');

const axios = require('axios');
require('dotenv').config();

class Searches {
    history = [];
    dbPath = './db/database.json';

    constructor() {
        //TODO Leer DB
        this.readDB();
    }

    get paramsMapBox() {
        return {
            'limit': 5,
            'language': 'en',
            'access_token': process.env.MAPBOX_KEY
            // `pk.eyJ1IjoiZmVsaXBlLXJhbWlyZXoiLCJhIjoiY2w2bWUxNzZhMDMwNzNqbXAwaWRvdGc1MiJ9.PzX3QhAcGLGd-sYrdvpFvA`
        }
    }

    async city(place = '') {

        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: this.paramsMapBox
            })

            const resp = await instance.get();

            return resp.data.features.map(place => {
                return ({
                    id: place.id,
                    name: place.place_name,
                    lng: place.center[0],
                    lat: place.center[1]
                })
            }); //Return the places that match the search
        } catch (error) {
            return [];
            // throw null
        }

    }


    async climatePlace(lat, lon) {
        try {
            //Instance of axios.create()
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    'lat': `${lat}`,
                    'lon': `${lon}`,
                    'appid': process.env.OPENWEATHER_KEY,
                }
            })
            const resp = await instance.get();
            // console.log(resp.data);


            //resp.data

            return {
                desc: `${resp.data.weather[0].description}`,
                min: `${resp.data.main.temp_min - 273.15}`,
                max: `${resp.data.main.temp_max - 273.15}`,
                temp: `${resp.data.main.temp - 273.15}`
            }

        } catch (error) {

        }
    }

    addHistory(place = '') {
        //prevent duplicate
        if (this.history.includes(place.toLocaleLowerCase())) return;
        this.history.unshift(place);
        this.saveDB();
    }

    saveDB() {
        const payload = {
            history: this.history
        }
        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    readDB() {
        //exists?
        //const info.... readFileSync... path... {encoding: 'utf-8'}
        const data = JSON.parse(info);
        this.history = ...data.history

    }

}

module.exports = {
    Searches
}