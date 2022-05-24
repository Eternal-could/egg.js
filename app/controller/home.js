'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { id } = ctx.query
    ctx.body = id
  }
  async user() {
    const { ctx } = this;
    const { id } = ctx.params
    ctx.body = id
  }
}

module.exports = HomeController;
