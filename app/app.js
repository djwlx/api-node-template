const Koa = require("koa");
const router = require("./routes");
const logMark = require("./middleware/log");

const app = new Koa();
// 记录日志
app.use(logMark());
// 路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("应用启动");
});
