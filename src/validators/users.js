const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator.js');

module.exports.validatorCreateUser = [
    check("email").exists().notEmpty().isEmail(),
    check("pwd").exists().notEmpty().isAlphanumeric(),
    check("role").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

module.exports.validatorGetUserById = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]