const express = require('express');
const router = express.Router();

router.route('/login').post((req, res) =>{
    const loginInfo = req.body;
    //llamar el servicio para hacer el login
});

module.exports = router;