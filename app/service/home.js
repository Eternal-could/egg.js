'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
    // 查找用户接口
    async user() {
        const { ctx, app } = this;
        const QUERY_STR = 'id, name';
        let sql = `select ${QUERY_STR} from list`; // 从list表里获取 id 的 sql 语句
        try {
            // mysql 实例已经挂载到 app 对象下，可以通过 app.mysql 获取到。
            // 使用query可以执行合法的sql语句 查
            const result = await app.mysql.query(sql);
            return result
        } catch (e) {
            console.log(e)
            return null;
        }
    }
    // 添加用户数据接口
    async addUser(name) {
        const { ctx, app } = this;
        try {
            // 在list表中， 给name字段插入一个新的数据
            const result = await app.mysql.insert('list', { name });
            return result
        } catch (e) {
            console.log(e);
            return null;
        }
    }
    // 编辑接口
    async editUser(id, name) {
        const { ctx, app } = this;
        try {
            const result = await app.mysql.update('list', { name }, {
                where: {
                    id
                }
            });
            return result;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
    // 删除接口
    async deleteUser(id) {
        const { ctx, app } = this;
        try {
            const result = await app.mysql.delete('list', { id });
            return result
        } catch (e) {
            console.log(e);
            return null;
        }
    }
}

module.exports = HomeService;