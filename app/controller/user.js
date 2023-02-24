const user = require("../models/user");

class User {
  static queryUser = () => {
    return user.findAll();
  };
}
module.exports = User;
