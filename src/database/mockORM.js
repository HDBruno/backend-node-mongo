const DB = require("./db.json");

/* const getUser = (id) => {

}; */

const getUsers = () => {
  return DB.users;
}

/* const addUser = () => {

};

const modifyUser = () => {

};

const deleteUser = () => {

}; */

module.exports = { getUsers };
