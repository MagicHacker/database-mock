/**
 * 测试sequelize连接数据库
 */
const { connect } = require('./index')
function test() {
	connect({
		database: 'test',
		username: 'root',
		password: 'zhang2684323',
		host: 'localhost',
		port: 3306,
		dialect: 'mysql'
	})
}

test()
