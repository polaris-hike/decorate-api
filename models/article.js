const Sequelize = require('sequelize');         // 引入Sequelize模块
const CateModel = require('./cate');             // 引入cate表model
const db = require('../db');                       // 引入数据库实例
const Article = db.define('Article', {           // 定义model
  id: {
    type: Sequelize.INTEGER, primaryKey: true, allowNull: false,
    autoIncrement: true
  },                               // 文章id
  title: { type: Sequelize.STRING(30), allowNull: false },   // 文章标题
  desc: { type: Sequelize.STRING, allowNull: false },         // 文章摘要
  cover: { type: Sequelize.STRING, allowNull: false },        // 文章封面图
  content: { type: Sequelize.TEXT, allowNull: false },        // 文章内容
  cate: { type: Sequelize.INTEGER, allowNull: false }         // 所属分类
}, {
  underscored: true,                                 // 是否支持驼峰
  tableName: 'article',                             // MySQL数据库表名
});
module.exports = Article;                           // 导出model
// 文章所属于分类，一个分类包含多个文章，将文章表和分类表进行关联
Article.belongsTo(CateModel, { foreignKey: 'cate', constraints: false });