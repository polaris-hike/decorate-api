const Sequelize = require('sequelize');         // 引入Sequelize模块
const db = require('../db');                       // 引入数据库实例
// 定义model
const Order = db.define('Order', {
  id: {
    type: Sequelize.INTEGER, primaryKey: true, allowNull: false,
    autoIncrement: true
  },                               // 主键id
  name: { type: Sequelize.STRING(30), allowNull: false },    // 姓名
  phone: { type: Sequelize.STRING(20), allowNull: false },   // 电话
  type: { type: Sequelize.STRING(20), allowNull: false },    // 装修类型
  orderDate: { type: Sequelize.DATE, allowNull: false },      // 预约时间
  message: { type: Sequelize.STRING }                             // 留言
}, {
  underscored: true,                                 // 是否支持驼峰
  tableName: 'order'                                 // MySQL数据库表名
});
module.exports = Order;                             // 导出model