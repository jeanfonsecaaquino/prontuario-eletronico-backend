const mysql = require('mysql');

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "prontuario_eletronico",
});

/**
 * 
 * @returns import("mysql").Connection}
 */
 const getConnection = () => {
	return new Promise((resolve, reject) => {
		if (connection.state !== 'disconnected') {
			return resolve(connection)
		}
		connection.connect((error) => {
			if (error) {
				return reject(error)
			}
			return resolve(connection)
		})
	})
}

/**
 * 
 * @param {any} search 
 * @param {any} model 
 * @returns {Array<import('../model/patient').Patient>}
 */
const search = async (search, model) => {
	const currentConnection = await getConnection();
	return new Promise((resolve, reject) => {
		currentConnection.query(search, (error, results, fields) => {
			if (error) {
				return reject(error)
			}
			return resolve(model.bind(results))
		});
	})
}

module.exports = {
	getConnection,
	search
}
