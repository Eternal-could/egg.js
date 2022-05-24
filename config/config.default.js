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
