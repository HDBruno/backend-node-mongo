const { validationResult } = require('express-validator');

module.exports.validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch {
        res.status(403).send({ status: "ERROR", detail: err.array() });
    }
}