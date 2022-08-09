const { readInput, inquirerMenu, pausa, listPlaces } = require("./helpers/inquirer")
const colors = require('colors');
const { Searches } = require("./models/searches");

// console.log(process.env) //Shows environment variables

const main = async () => {

    const searches = new Searches();
    let opt;



    do {
        opt = await inquirerMenu();

        switch (opt) {

            case 1:
                //Show Message
                const placeSearch = await readInput('City: ');
                //Find places
                const places = await searches.city(placeSearch);
                //Select place
                const id = await listPlaces(places);
                if (id === '0') continue;
                
                const chosenPlace = places.find(p => p.id === id);
                //Save in DB
                searches.addHistory(chosenPlace.name);

                //Climate
                const climate = await searches.climatePlace(chosenPlace.lat, chosenPlace.lng);

                console.clear();
                console.log('\nInfo of the city\n'.green)
                console.log('City: ', chosenPlace.name);
                console.log('Lat: ', chosenPlace.lat);
                console.log('Lng: ', chosenPlace.lng);
                console.log('Temperature: ', climate.temp);
                console.log('Min: ', climate.min);
                console.log('Max: ', climate.max);
                console.log('How is the weather:', climate.desc);




                break;

            case 2:
                searches.history.forEach((place, i) => {
                    const idx = `${i+1}.`.green;
                    console.log(`${idx} ${place}`) 
                })

                break;
        }



        await pausa();

    } while (opt !== 0);


}

main()