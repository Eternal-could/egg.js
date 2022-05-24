'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
    async user() {
        // 假设从数据库里拿到了这些数据
        return {
            name: '万章',
            slogen: '好好学习，天天向上'
        }
    }
}

module.exports = HomeService;