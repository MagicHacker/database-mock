/**
 * 操作数据库表
 */

const createTable = (Sequelize, { tableName, columnObj, freezeTableName }) => {
	Sequelize.define(tableName, columnObj, { freezeTableName: freezeTableName })
}
module.exports = {
	createTable
}
