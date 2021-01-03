/**
 * 数据库连接文件
 * @param {*} Sequelize sequelize构造器
 * @param {*} database 数据库名称
 * @param {*} username 用户名
 * @param {*} password 密码
 * @param {*} host host地址
 * @param {*} port 端口号
 * @param {*} dialect 数据库方言
 */
const dbConnection = async (
	Sequelize,
	database,
	username,
	password,
	host,
	port,
	dialect
) => {
	const sequelize = new Sequelize(database, username, password, {
		host,
		port,
		dialect
	})
	try {
		await sequelize.authenticate()
		console.log('数据库连接成功')
	} catch (error) {
		console.error('数据库连接失败：', error)
	}
}
module.exports = {
	dbConnection
}
