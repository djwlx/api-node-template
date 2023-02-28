const jwt = require("jsonwebtoken");

const key = "DJWL";

class JWT {
  static setToken = (data) => {
    return jwt.sign(data, key);
  };
  static getData = (token) => {
    return jwt.verify(token, key);
  };
}

module.exports = JWT;
