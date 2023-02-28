const sequelize = require("../utils/sequelize");
const { DataTypes } = require("sequelize");
const user = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
});

module.exports = user;
