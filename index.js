/**
 * 项目入口文件
 */

const { Sequelize } = require('sequelize')
const { config } = require('./src/config/mysql')
const { dbConnection } = require('./src/connect')

/**
 *
 * @param {*} 数据库连接的相关参数
 */
const connect = ({ database, username, password, host, port, dialect }) => {
	dbConnection(Sequelize, config({ database, username, password, host, port, dialect }))
}

module.exports = {
	connect
}
