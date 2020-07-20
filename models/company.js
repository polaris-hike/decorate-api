const Sequelize = require('sequelize');         // 引入Sequelize模块
const db = require('../db');                       // 引入数据库实例
// 定义model
const Company = db.define('Company', {
  id: {
    type: Sequelize.INTEGER, primaryKey: true, allowNull: false,
    autoIncrement: true
  },                                              // 主键id
  name: { type: Sequelize.STRING(50), allowNull: false },    // 企业名称
  address: { type: Sequelize.STRING, allowNull: false },      // 企业地址
  tel: { type: Sequelize.STRING(30), allowNull: false },      // 企业电话
  intro: { type: Sequelize.TEXT, allowNull: false },          // 企业简介
  longitude: { type: Sequelize.DECIMAL(6), allowNull: false }, // 企业坐标经度
  latitude: { type: Sequelize.DECIMAL(6), allowNull: false },  // 企业坐标纬度
}, {
  underscored: true,                                 // 是否支持驼峰
  tableName: 'company',                             // MySQL数据库表名
});
module.exports = Company;                           // 导出model