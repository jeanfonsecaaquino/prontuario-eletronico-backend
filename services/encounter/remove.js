const { removeRepository } = require("../../repository/encounter")

/**
 * 
 * @param {number} id 
 * @param {import('../../model/patient').Patient>}  patient 
 * @returns any
 */
const execute = async (id)=>{
    return removeRepository(id)
}

module.exports = {
    execute
}