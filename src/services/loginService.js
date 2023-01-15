const DB = require("../database/mockORM.js");

const login = (usrInfo) => {
  const users = DB.getUsers();
  const match = users.filter(user => {
    if (usrInfo.usrName === user.usrName && usrInfo.pwd === user.pwd){
      return user
    } else {
      return false
    }
  });
  return match == false
    ? { status: "ERROR", data: "" }
    : { status: "OK", data: match };
}

module.exports = { login };
