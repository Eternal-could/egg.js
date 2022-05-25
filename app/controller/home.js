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

  // 获取用户信息
  async user() {
    const { ctx } = this;
    const result = await ctx.service.home.user();
    ctx.body = result;
  }
  // ejs模板
  async index() {
    const { ctx } = this;
    // ctx.render 默认会去view文件夹去寻找index.html，这是egg自己约定俗成的
    await ctx.render('index.html', {
      title: '我是万章',
    });
  }
  // 添加用户
  async addUser() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    try {
      const result = await ctx.service.home.addUser(name);
      ctx.body = {
        code: 200,
        msg: '添加成功',
        data: null
      }
    } catch (e) {
      ctx.body = {
        code: 500,
        msg: '添加失败',
        data: null
      }
    }
  }
}

module.exports = HomeController;
