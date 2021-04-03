const { createRepository } = require("../../repository/patient")

/**
 * 
 * @param {number} id 
 * @param {import('../../model/patient').Patient>}  patient 
 * @returns any
 */
const execute = async (patient)=>{
    return createRepository(patient)
}

module.exports = {
    execute
}