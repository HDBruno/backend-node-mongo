const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator.js');

module.exports.validatorRegister = [
    check("email").exists().notEmpty().isEmail(),
    check("pwd").exists().notEmpty().isLength({ min: 4, max: 20 }),
    check("role").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

module.exports.validatorLogin = [
    check("email").exists().notEmpty().isEmail(),
    check("pwd").exists().notEmpty().isLength({ min: 4, max: 20 }),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]