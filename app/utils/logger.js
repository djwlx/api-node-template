const path = require("path");
const log4js = require("log4js");

const LOG_PATH = path.join(path.resolve(__dirname, "../../"), "logs");
log4js.configure({
  appenders: {
    access: {
      type: "dateFile",
      pattern: "-yyyy-MM-dd.log", //生成文件的规则
      alwaysIncludePattern: true, // 文件名始终以日期区分
      encoding: "utf-8",
      filename: path.join(LOG_PATH, "/yyyy-MM/access"), //生成文件名
    },
    application: {
      type: "dateFile",
      pattern: "-yyyy-MM-dd.log",
      alwaysIncludePattern: true,
      encoding: "utf-8",
      filename: path.join(LOG_PATH, "/yyyy-MM/application"),
    },
    out: {
      type: "console",
    },
  },
  categories: {
    default: { appenders: ["out"], level: "info" },
    access: { appenders: ["access"], level: "info" },
    application: { appenders: ["application"], level: "all" },
  },
});

// getLogger 传参指定的是类型
exports.accessLogger = () => log4js.koaLogger(log4js.getLogger("access")); // 记录所有访问级别的日志
exports.logger = log4js.getLogger("application");
