/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1653383019989_8560';

  // add your middleware config here
  config.middleware = [];

  // // 配置mysql
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码 如果没有设置就不写
      password: '2794221278A',
      // 自己建立的数据库名称
      database: 'test'
    },
    // 加载到app上， 默认开启
    app: true,
    // 是否加载到agent上 默认关闭
    agent: false,
  };
  // 关闭csrf
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*'], // 配置白名单
  };


  // 配置ejs
  config.view = {
    // 将view文件夹下的.html后缀的文件，识别为.ejs
    mapping: {'.html':'ejs'}
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

