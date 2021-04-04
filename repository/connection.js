const mysql = require('mysql');
const log = require('../util/log')

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
			log.info(`Connected at ${connection.config.host}`)
			return resolve(connection)
		}
		connection.connect((error) => {
			if (error) {
				log.info(`Error on connect ${connection.config.host}`, error)
				return reject(error)
			}
			log.info(`Connected at ${connection.config.host}`)
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
		log.info(`Executing query [${search}]`)
		currentConnection.query(search, (error, results) => {
			if (error) {
				log.info(`Error on Executing query [${search}]`, error)
				return reject(error)
			}
			return resolve(model.bind(results))
		});
	})
}

/**
 * 
 * @param {any} search 
 * @param {any} model 
 * @returns {Array<import('../model/patient').Patient>}
 */
const update = async (id, data, model) => {
	const currentConnection = await getConnection();
	return new Promise((resolve, reject) => {
		const { stringQuery, values } = model.bindUpdate(id, data)
		log.info(`Executing query update [${search}]`)
		currentConnection.query(stringQuery, values, (error) => {
			if (error) {
				log.info(`Error on Executing query [${search}]`, error)
				return reject(error)
			}
			return resolve()
		});
	})
}

/**
 * 
 * @param {any} search 
 * @param {any} model 
 * @returns {Array<import('../model/observation').Observation>}
 */
const save = async (data, model) => {
	const currentConnection = await getConnection();
	return new Promise((resolve, reject) => {
		const { stringQuery, translatedData } = model.bindCreate(data, model)
		log.info(`Executing query save [${stringQuery}]`)
		currentConnection.query(stringQuery, translatedData, (error, results) => {
			if (error) {
				log.info(`Error on Executing query [${stringQuery}]`, error)
				return reject(error)
			}
			return resolve()
		});
	})
}

/**
 * 
 * @param {any} search 
 * @param {any} model 
 * @returns {Array<import('../model/patient').Patient>}
 */
 const remove = async (search, model) => {
	const currentConnection = await getConnection();
	return new Promise((resolve, reject) => {
		log.info(`Executing query [${search}]`)
		currentConnection.query(search, (error, results) => {
			if (error) {
				log.info(`Error on Executing query [${search}]`, error)
				return reject(error)
			}
			return resolve()
		});
	})
}

module.exports = {
	getConnection,
	search,
	update,
	save,
	remove
}
