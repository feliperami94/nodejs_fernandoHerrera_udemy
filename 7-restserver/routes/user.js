const { Router } = require('express');
const { usersGet, usersPost, usersDelete, usersPut } = require('../controller/user');

const router = Router();

router.get('/', usersGet) //Not executing the function but the reference. When calling the router, the two arguments (req, res) will be passed to the function

router.put('/:id', usersPut)

router.post('/', usersPost)

router.delete('/', usersDelete)



module.exports = router;