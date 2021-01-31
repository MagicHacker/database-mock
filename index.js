/**
 * 项目入口文件
 */

const { Sequelize } = require('sequelize')
const { config } = require('./src/config/mysql')
const { dbConnection } = require('./src/connect')

const mysqlConf = config('test', 'root', 'zhang2684323', 'localhost', 3306)

const connect = () => {
	dbConnection(
		Sequelize,
		mysqlConf.db,
		mysqlConf.username,
		mysqlConf.passowrd,
		mysqlConf.host,
		mysqlConf.port,
		mysqlConf.dialect
	)
}

connect()
