const Role = require('../models/role');

const isRoleValid = async (role = '') => {
    const existsRole = await Role.findOne({role});
    if (!existsRole) {
        throw new Error(`The role ${role} isn't registered in the database`)
    }
}

module.exports = {
    isRoleValid
}