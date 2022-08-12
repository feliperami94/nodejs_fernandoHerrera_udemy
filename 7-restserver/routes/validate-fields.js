const {  validationResult } = require('express-validator');



const validateFields = (req, res, next) => { //The validation of the responses are called with the same request/response but with a third argument -> next
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    next();

}

module.exports = {
    validateFields
}