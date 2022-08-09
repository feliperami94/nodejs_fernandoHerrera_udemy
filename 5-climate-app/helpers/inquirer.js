const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'options',
        message: 'What do you want to do?',
        choices: [
            {
                value: 1,
                name: `1. `.green + `Find a place`
            },
            {
                value: 2,
                name: `2. `.green + `History`
            },
            {
                value: 0,
                name: `0. `.green + `Exit`
            },
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

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancel'
    })

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

}

const confirm = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const {ok} = await inquirer.prompt(question);
    console.log(ok)
    return ok

}

const showChecklist = async (tasks = []) => {

    const choices = tasks.map((task, i) => {
        const idx = `${i + 1}.`.green
        return{
            value: task.id,
            name: `${idx} ${task.description}`,
            checked: (task.completedIn) ? true : false
        }
    });


    const questions = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Select the completed tasks: ',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(questions);
    return ids

}

module.exports = {
    inquirerMenu,
    pausa,
    readInput,
    listDeleteTask,
    confirm,
    showChecklist
}