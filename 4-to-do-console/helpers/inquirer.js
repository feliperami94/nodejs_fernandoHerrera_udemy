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
                name: `1. `.green + `Create task`
            },
            {
                value: '2',
                name: `2. `.green + `List tasks`
            },
            {
                value: '3',
                name: `3. `.green + `List completed tasks`
            },
            {
                value: '4',
                name: `4. `.green + `List pending tasks`
            },
            {
                value: '5',
                name: `5. `.green + `Complete task(s)`
            },
            {
                value: '6',
                name: `6. `.green + `Delete task`
            },
            {
                value: '0',
                name: `0. `.green + `Exit`
            }
        ]
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
    const pauseProp = [
        {
            type: 'input',
            name: 'pause',
            message: `Press ${'ENTER'.green} to continue`
        }
    ]
    console.log('\n')
    const { userEnter } = await inquirer.prompt(pauseProp);
}

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Please enter a value'
                }
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt(question);
    return desc
}

const listDeleteTask = async (tasks = []) => {

    const choices = tasks.map((task, i) => {
        const idx = `${i + 1}.`.green
        return{
            value: task.id,
            name: `${idx} ${task.description}`
        }
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Delete',
            choices
        }
    ]
    const {id} = await inquirer.prompt(questions);
    return id

    // {
    //     value: 'tarea.id',
    //     name: `1. `.green + `Create task`
    // }

}

module.exports = {
    inquirerMenu,
    pausa,
    readInput,
    listDeleteTask
}