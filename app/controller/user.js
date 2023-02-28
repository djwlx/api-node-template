const userOp = require("../service/user");

class User {
  static test = async (ctx, next) => {
    ctx.body = "test";
  };
  static show = async (ctx, next) => {
    const result = await userOp.query();
    ctx.body = result;
  };
}
module.exports = User;
