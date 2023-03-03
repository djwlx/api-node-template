// 为了简便开发，将同步数据库的脚本放在这，每次新增model或者更改数据模型时时需要在此引入并执行

const modelList = [require("../app/models/user")];

// model.sync() - 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
// model.sync({ force: true }) - 将创建表,如果表已经存在,则将其首先删除
// model.sync({ alter: true }) - 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.

(async () => {
  await modelList?.forEach((model) => {
    model.sync({ alter: true });
  });
})();
