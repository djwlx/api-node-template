const { Sequelize } = require("sequelize");
const { baseLog } = require("./logger");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../database/index.db",
  logging: (sql) => baseLog.info(sql),
  define: {
    freezeTableName: true,
    timestamps: true,
  },
});

try {
  sequelize.authenticate().then(() => {
    module.exports = sequelize;
  });
} catch (error) {
  log.error("链接数据库错误", error);
}

module.exports = sequelize;
