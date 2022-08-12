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

module.exports = {
    isRoleValid,
    emailUniqueValidation
}