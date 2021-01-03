/**
 * mysql 连接配置文件
 */

const config = (db, username, passowrd, host, port) => {
	return {
		db,
		username,
		passowrd,
		host,
		port,
		dialect: 'mysql'
	}
}
module.exports = {
	config
}
