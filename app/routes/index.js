// 路由
const Router = require("koa-router");
const User = require("../controller/user");

const router = new Router();

router.get("/", async (ctx) => {
  const a = await User.queryUser();
  ctx.body = a;
});

module.exports = router;
