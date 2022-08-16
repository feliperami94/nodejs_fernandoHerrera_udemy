const { response, request } = require('express'); //Imports methods for the response 
const bcryptjs = require('bcryptjs');
const User = require('../models/user'); //The capital U is a standard for using to create instances
const user = require('../models/user');

const usersGet = async (req = request, res = response) => {
    const { limit = 5, from=0 } = req.query; //It will destructure the "limit" query parameter
    const query = {state: true}
    
    const [totalRecords, users] = await Promise.all([ // Executes the promises simultaneously. This because one promise doesn't depent on the other's result.
        User.countDocuments(query),
        User.find(query)
            .skip(Number(from))
            .limit(Number(limit))
    ])
    res.json({
        totalRecords,
        users
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

    res.status(200).json(user)
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