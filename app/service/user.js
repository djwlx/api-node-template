const user = require("../models/user");
class User {
  static query = () => {
    return user.findAll();
  };
}

module.exports = User;
