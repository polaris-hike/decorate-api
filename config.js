const config = {                            // 默认dev配置
  DEBUG: true,                               // 是否调试模式
  // MySQL数据库连接配置
  MYSQL: {
    host: 'localhost',
    database: 'decorate',
    username: 'root',
    password: '123456'
  }
};
if (process.env.NODE_ENV === 'production') {
  // 生产环境MySQL数据库连接配置
  config.MYSQL = {
    host: 'aaa.mysql.rds.aliyuncs.com',
    database: 'aaa',
    username: 'aaa',
    password: 'aaa'
  };
}
module.exports = config;                  // 导出配置