const { readInput, inquirerMenu, pausa } = require("./helpers/inquirer")
const colors = require('colors');
const { Searches } = require("./models/searches");


const main = async () => {
    
    const searches = new Searches();
    let opt;
    


    do {
        opt = await inquirerMenu();
        
        switch(opt){

            case 1:
                const placeSearch = await readInput('City: ');
                console.log(placeSearch);
                console.log('\nInfo of the city\n'.green)
                console.log('City: ',);
                console.log('Lat: ',);
                console.log('Lng: ',);
                console.log('Temperature: ',);
                console.log('Min: ',);
                console.log('Max: ',);





            break;

            case 2:

        }

        await pausa();
        
    } while (opt!==0);


}

main()