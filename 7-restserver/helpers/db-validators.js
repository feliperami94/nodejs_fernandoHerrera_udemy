const Role = require('../models/role');
const User = require('../models/user');


const isRoleValid = async (role = '') => {
    const existsRole = await Role.findOne({role});
    if (!existsRole) {
        throw new Error(`The role ${role} isn't registered in the database`)
    }
}

const emailUniqueValidation = async ( email = '') => {
    const existsEmail = await User.findOne({email});
    if (existsEmail) {
        throw new Error(`The email has already been taken`)
    }
}

const userExistsById = async ( id ) => {
    const userExists = await User.findById(id);
    if (!userExists) {
        throw new Error(`The user of the id ${id} doesn't exists`)
    }
}

module.exports = {
    isRoleValid,
    emailUniqueValidation,
    userExistsById
}