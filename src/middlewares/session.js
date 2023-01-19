const { handleHttpErrors } = require('../utils/handleErrors.js');
const { verifyToken } = require('../utils/handleJWT.js');
const { userModel } = require('../models');

module.exports.authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttpErrors(res, "No existe una sesion activa, por favor inicie una nueva sesion.", 401)
      return;
    }

    const token = req.headers.athorization.split(' ').pop(); // el token viene el el header como Barer  iwjrfn234..., dividimos el strting en 2 por el espacio y recuperamos la 2da parte.
    const tokenData = await verifyToken(token);

    if (!tokenData._id) {
      handleHttpErrors(res, "No existe un token id.", 401)
      return;
    }

    const user = await userModel.findById(tokenData._id); // almaceno al usuario que esta consultando el endpoint
    req.user = user; // se añade la info del usuario al request
    
    next();
  } catch (e) {
    handleHttpErrors(res, "No existe una sesion.", 401)
  }
}