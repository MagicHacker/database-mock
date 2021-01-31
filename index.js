/**
 * 项目入口文件
 */

const { Sequelize } = require('sequelize')
const { config } = require('./src/config/mysql')
const { dbConnection } = require('./src/connect')

const mysqlConf = config({
	database: 'test',
	username: 'root',
	password: 'zhang2684323',
	host: 'localhost',
	port: 3306
})

const connect = () => {
	dbConnection(Sequelize, {
		database: mysqlConf.database,
		username: mysqlConf.username,
		password: mysqlConf.password,
		host: mysqlConf.host,
		port: mysqlConf.port,
		dialect: mysqlConf.dialect
	})
}

connect()
