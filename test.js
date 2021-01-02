/**
 * 测试sequelize连接数据库
 */
const { Sequelize } = require('sequelize')
const mysqlConfig = require('./src/config/mysql')

// mysql连接
const mysqlConf = mysqlConfig.config('test', 'root', 'zhang2684323', 'localhost', 3306)
const sequelize = new Sequelize(mysqlConf.db, mysqlConf.username, mysqlConf.passowrd, {
  host: mysqlConf.host,
  port: mysqlConf.port,
  dialect: 'mysql'
})

async function mysqlTest() {
  try {
    await sequelize.authenticate()
    console.log('连接成功')
  } catch (error) {
    console.error(error)
  }
}
mysqlTest()