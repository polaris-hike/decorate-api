const Sequelize = require('sequelize');         // 引入Sequelize模块
const db = require('../db');                       // 引入数据库实例
// 定义model
const Event = db.define('event', {
  id: {
    type: Sequelize.INTEGER, primaryKey: true, allowNull: false,
    autoIncrement: true
  },                               // 活动id
  name: { type: Sequelize.STRING(20), allowNull: false },    // 活动名称
  img: { type: Sequelize.STRING, allowNull: false },          // 活动图片
  url: { type: Sequelize.STRING },                                 // 活动url
  articleId: { type: Sequelize.INTEGER },          // 活动关联的文章id
}, {
  underscored: true,                                 // 是否支持驼峰
  tableName: 'event',                                // MySQL数据库表名
});
module.exports = Event;                             // 导出model
