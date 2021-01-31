/**
 * mysql 连接配置文件
 */

const config = ({ database, username, password, host, port }) => {
	return {
		database,
		username,
		password,
		host,
		port,
		dialect: 'mysql'
	}
}
module.exports = {
	config
}
