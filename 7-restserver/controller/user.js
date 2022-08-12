const { response, request } = require('express'); //Imports methods for the response 
const bcryptjs = require('bcryptjs');
const User = require('../models/user') //The capital U is a standard for using to create instances

const usersGet = (req = request, res = response) => {
    const { a, b, c, name } = req.query;
    res.status(200).json({
        msg: 'get API - Controller',
        a,
        b,
        c,
        name
    })
}

const usersPost = async (req = request, res = response) => {



    //User creation
    const {name, email, password, role} = req.body;
    const user = new User({name, email, password, role});

    //Verify if email exists


    //Encrypt password
    const salt = bcryptjs.genSaltSync();//Number of cycles of the encrypt
    user.password = bcryptjs.hashSync( password, salt);

    //Save in DB
    await user.save();

    res.status(201).json({
        msg: 'post API - Controller',
        user
    })
}

const usersPut = async (req, res) => {
    const {id} = req.params;
    const {_id, password, google, email, ... rest} = req.body;

    //TODO validate against DB


    if (password){
        //Encrypt password
        const salt = bcryptjs.genSaltSync();//Number of cycles of the encrypt
        rest.password = bcryptjs.hashSync( password, salt);
    }
    const user = await User.findByIdAndUpdate(id, rest);

    res.status(200).json({
        msg: 'put API - Controller',
        user
    })
}

const usersDelete = (req, res) => {
    res.status(200).json({ msg: 'delete API - Controller' })
}


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}
//102527977
//Mauricio Garcia