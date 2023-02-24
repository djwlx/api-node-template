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
user.sync({ alter: true }).then(() => {
  user.create({
    firstName: "小明",
    lastName: "王",
  });
});

module.exports = user;
