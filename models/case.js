const Sequelize = require('sequelize');         // 引入Sequelize模块
const db = require('../db');                       // 引入数据库实例
// 定义model
const Case = db.define('Case', {
  id: {
    type: Sequelize.INTEGER, primaryKey: true, allowNull: false,
    autoIncrement: true
  },                               // 案例id
  name: { type: Sequelize.STRING(20), allowNull: false },    // 案例名称
  img: { type: Sequelize.STRING, allowNull: false },          // 案例图片
  desc: { type: Sequelize.STRING },                               // 案例描述
  content: { type: Sequelize.TEXT }                               // 案例内容
}, {
  underscored: true,                                 // 是否支持驼峰
  tableName: 'case',                                 // MySQL数据库表名
});
module.exports = Case;                              // 导出model

