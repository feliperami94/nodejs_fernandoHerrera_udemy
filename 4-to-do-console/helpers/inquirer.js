const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'options',
        message: 'What do you want to do?',
        choices: [
            {
                value: '1',
                name: '1. Create task'
            },
            {
                value: '2',
                name: '2. List tasks'
            },
            {
                value: '3',
                name: '3. List completed tasks'
            },
            {
                value: '4',
                name: '4. List pending tasks'
            },
            {
                value: '5',
                name: '5. Complete task(s)'
            },
            {
                value: '6',
                name: '6. Delete task'
            },
            {
                value: '0',
                name: '0. Exit'
            }
        ]
    }
]
const pauseProp = [
    {
        type: 'input',
        name: 'pause',
        message: `Press ${'ENTER'.green} to continue`
    }
]



const inquirerMenu = async () => {
    // console.clear();
    console.log('======================'.blue);
    console.log('   Choose an option   '.green);
    console.log('======================\n'.blue);

    const { options } = await inquirer.prompt(questions);
    return options
}

const pausa = async () => {
    console.log('\n')
    const { userEnter } = await inquirer.prompt(pauseProp);
    // return userEnter;
}

module.exports = {
    inquirerMenu,
    pausa
}