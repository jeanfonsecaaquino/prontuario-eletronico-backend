const { editRepository } = require("../../repository/patient")

/**
 * 
 * @param {number} id 
 * @param {import('../../model/patient').Patient>}  patient 
 * @returns any
 */
const execute = async (id, patient)=>{
    return editRepository(id, patient)
}

module.exports = {
    execute
}