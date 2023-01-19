const bcryptjs = require('bcryptjs');

module.exports.encrypt = async (pwdPlain) => {
    const hash = await bcryptjs.hash(pwdPlain, 10); //el salt es la aleatoriedad de la encriptacion, mientras mas grande mejor, pero es mas lento.
    return hash;
}

module.exports.compare = async (pwdPlain, hashPwd) => {
    return await bcryptjs.compare(pwdPlain, hashPwd);
}