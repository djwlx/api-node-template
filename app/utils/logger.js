const path = require("path");
const log4js = require("log4js");
const LOG_PATH = path.join(path.resolve(__dirname, "../../"), "logs");
// 对日志进行级别分类

log4js.configure({
  appenders: {
    info: {
      type: "file",
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true,
      maxLogSize: 10485760,
      filename: path.join(LOG_PATH, "info"), //生成文件名
    },
    error: {
      type: "file",
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true,
      maxLogSize: 10485760,
      filename: path.join(LOG_PATH, "error"),
    },
    dataBase: {
      type: "file",
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true,
      maxLogSize: 10485760,
      filename: path.join(LOG_PATH, "dataBase"),
    },
    errorFilter: {
      type: "logLevelFilter",
      level: "error",
      appender: "error",
    },
    infoFilter: {
      type: "logLevelFilter",
      level: "info",
      appender: "info",
    },
    out: {
      type: "console",
    },
  },
  categories: {
    default: {
      appenders: ["infoFilter", "errorFilter", "out"],
      level: "all",
    },
    dataBase: {
      appenders: ["dataBase"],
      level: "all",
    },
  },
});

const log = log4js.getLogger();
const baseLog = log4js.getLogger("dataBase");
module.exports = {
  log,
  baseLog,
};
