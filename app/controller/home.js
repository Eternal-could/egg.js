'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { id } = ctx.query
    ctx.body = id
  }
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
}

module.exports = HomeController;
