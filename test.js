/**
 * 测试sequelize连接数据库
 */
const { Sequelize } = require('sequelize')
const mysqlConfig = require('./src/config/mysql')
const connect = require('./src/connect')
const mysqlConf = mysqlConfig.config(
	'test',
	'root',
	'zhang2684323',
	'localhost',
	3306
)

function test() {
	connect.dbConnection(
		Sequelize,
		mysqlConf.db,
		mysqlConf.username,
		mysqlConf.passowrd,
		mysqlConf.host,
		mysqlConf.port,
		mysqlConf.dialect
	)
}

test()
