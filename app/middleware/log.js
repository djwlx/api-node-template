// 日志记录中间件
const { log } = require("../utils/logger");
const logMrak = (options) => {
  return async (ctx, next) => {
    const startTime = Date.now();
    const {
      method, // 请求方法
      url, // 请求链接
    } = ctx?.request;

    // 记录应用中的错误
    try {
      await next();
    } catch (err) {
      log.error(err);
    }

    const endTime = Date.now();
    const { status } = ctx.response;

    const time = endTime - startTime + "ms";
    log.info(method, status, url, "请求耗时:", time);
  };
};
module.exports = logMrak;
