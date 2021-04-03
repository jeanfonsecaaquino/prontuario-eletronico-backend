const { removeRepository } = require("../../repository/patient")

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