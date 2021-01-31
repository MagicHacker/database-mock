/**
 * mysql 连接配置文件
 */

const config = ({ database, username, password, host, port, dialect }) => {
	return {
		database,
		username,
		password,
		host,
		port,
		dialect
	}
}
module.exports = {
	config
}
