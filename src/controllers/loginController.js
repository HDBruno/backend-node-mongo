const loginService = require("../services/loginService.js");

function login(req, res) {
  const body = req.body;
  const resultado = loginService.login(body);
  resultado.status == "ERROR"
    ? res.status(400).send(resultado)
    : res.status(200).send(resultado);
}

module.exports = { login };
