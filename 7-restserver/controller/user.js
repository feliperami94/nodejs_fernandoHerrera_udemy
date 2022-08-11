 const {response, request} = require('express'); //Imports methods for the response 
 
 const usersGet = (req = request, res = response) => {
    const {a, b, c, name} = req.query;
    res.status(200).json({
        msg: 'get API - Controller',
        a,
        b,
        c,
        name
    })
}

const usersPost = (req = request, res = response) => {

        const { name, age } = req.body;
    res.status(201).json({
        msg: 'post API - Controller',
        name,
        age
    })
}

const usersPut = (req, res) => {
    const id = req.params.id;

    res.status(200).json({
        msg: 'put API - Controller',
        id
    })
}

const usersDelete = (req, res) => {
    res.status(200).json({msg: 'delete API - Controller'})
}


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}
//102527977
//Mauricio Garcia