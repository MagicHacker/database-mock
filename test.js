/**
 * 测试sequelize连接数据库
 */
const { Sequelize } = require('sequelize')
const { config } = require('./src/config/mysql')
const { dbConnection } = require('./src/connect')
const mysqlConf = config('test', 'root', 'zhang2684323', 'localhost', 3306)

function test() {
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

test()
