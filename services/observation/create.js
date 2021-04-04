const { createRepository } = require("../../repository/observation")

/**
 * 
 * @param {number} id 
 * @param {import('../../model/observation').Observation>}  observation 
 * @returns any
 */
const execute = async (observation)=>{
    return createRepository(observation)
}

module.exports = {
    execute
}