'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // async index() {
  //   const { ctx } = this;
  //   const { id } = ctx.query
  //   ctx.body = id
  // }
  // async user() {
  //   const { ctx } = this;
  //   const { id } = ctx.params
  //   ctx.body = id
  // }
  async add() {
    const { ctx } = this;
    const { title } = ctx.request.body;
    ctx.body = {
      title
    };
  }
  async user() {
    // 获取用户信息
    const { ctx } = this;
    const { name, slogen } = await ctx.service.home.user();
    ctx.body = {
      name,
      slogen
    }
  }
  // ejs模板
  async index() {
    const { ctx } = this;
    // ctx.render 默认会去view文件夹去寻找index.html，这是egg自己约定俗成的
    await ctx.render('index.html', {
      title: '我是万章',
    });
  }
}

module.exports = HomeController;
