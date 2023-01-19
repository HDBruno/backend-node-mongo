const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword.js");
const { tokenSign } = require("../utils/handleJWT.js");
const { userModel } = require("../models");
const handleHttpErrors = require("../utils/handleErrors.js");

module.exports.register = async (req, res) => {
  try {
    req = matchedData(req);
    const hashedPwd = await encrypt(req.pwd);
    const body = { ...req, pwd: hashedPwd };
    const userData = await userModel.create(body);
    res.status(200).send({
      status: "OK",
      data: "El usuario se ha creado.",
      token: await tokenSign(userData),
    });
  } catch (e) {
    handleHttpErrors(res, "NO se ha podido crear el usuario.", 400);
  }
};

module.exports.login = async (req, res) => {
  try {
    req = matchedData(req); // solamente deja la data q corresponda al modelo de datos
    const user = await userModel.findOne({ email: req.email });
    
    if (!user) {
      handleHttpErrors(res, "Usuario inexistente.", 404);
      return;
    }
    
    const hashedPwd = user.pwd;
    const check = await compare(req.pwd, hashedPwd);
    
    if (!check) {
      handleHttpErrors(res, "Password NO valido.", 401);
      return;
    }
    
    user.set('pwd', undefined, { strict: false }); // hace q no devuelva el password en la info del usuario.

    const data = {
      status: "OK",
      token: await tokenSign(user),
      user,
    };
    
    res.status(200).send({ data });
  } catch (e) {
    handleHttpErrors(res, "ERROR al loguear al usuario.", 400);
  }
};
