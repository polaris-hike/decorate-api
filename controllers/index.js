const Common = require('./common');                  // 引入公共方法
const EventModel = require('../models/event');    // 引入event表的model
const CateModel = require('../models/cate');       // 引入cate表的model
const CaseModel = require('../models/case');       // 引入case表的model
const ArticleModel = require('../models/article');   // 引入article表的model
const CompanyModel = require('../models/company');   // 引入company表的model
const OrderModel = require('../models/order');    // 引入order表的model
const Constant = require('../constant/constant'); // 引入常量
const dateFormat = require('dateformat');          // 引入dateformat包
// 配置对象
let exportObj = {
  eventList,
  cateList,
  articleList,
  article,
  caseList,
  caseInfo,
  company,
  order
};
module.exports = exportObj;               // 导出对象，供其他模块调用
// 获取活动列表方法
function eventList(req, res) {
  // 活动列表逻辑
  const resObj = Common.clone(Constant.DEFAULT_SUCCESS);
  let tasks = {
    query: cb => {
      EventModel
        .findAll()
        .then(function (result) {
          let list = [];
          result.forEach((v, i) => {
            let obj = {
              id: v.id,
              name: v.name,
              img: v.img,
              url: v.url,
              articledId: v.articledId,
              createdAt: dateFormat(v.createdAt, 'yyyy-mm-dd HH:MM:ss')
            }
            list.push(obj)
          })
          resObj.data = {
            list
          }
          cb(null);
        }).catch(function (err) {
          console.log(err)
          cb(Constant.DEFAULT_ERROR)
        })
    }
  }
  Common.autoFn(tasks, res, resObj)
}
// 获取分类列表方法
function cateList(req, res) {
  // 分类列表逻辑
}
// 获取文章列表方法
function articleList(req, res) {
  // 文章列表逻辑
}
// 获取文章详情方法
function article(req, res) {
  // 文章详情逻辑
}
// 获取案例列表方法
function caseList(req, res) {
  // 案例列表逻辑
}
// 获取案例详情方法
function caseInfo(req, res) {
  // 案例详情逻辑
}
// 获取企业信息方法
function company(req, res) {
  // 企业信息逻辑
}
// 添加预约方法
function order(req, res) {
  // 添加预约逻辑
}