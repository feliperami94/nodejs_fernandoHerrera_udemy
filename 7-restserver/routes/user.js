const { Router } = require('express');
const { check } = require('express-validator');

const { isRoleValid, emailUniqueValidation } = require('../helpers/db-validators');
const { validateFields } = require('./validate-fields');
const { usersGet, 
        usersPost,
        usersDelete,
        usersPut } = require('../controller/user');

const router = Router();

router.get('/', usersGet) //Not executing the function but the reference. When calling the router, the two arguments (req, res) will be passed to the function

router.put('/:id', usersPut)

router.post('/', [ // The second argument is the middleware, or an array of middlewares. The result is obtained in the controller.
    check('email', 'The email is not valid').isEmail(), 
    check('email').custom(emailUniqueValidation),
    check('name', 'The name is mandatory').not().isEmpty(),
    check('password', 'The password length must be greater or equal than 6 letters').isLength({min: 6}),
    // check('role', 'The role  is not valid').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( isRoleValid),
    validateFields //Custom middleware
], usersPost) 

router.delete('/', usersDelete)



module.exports = router;