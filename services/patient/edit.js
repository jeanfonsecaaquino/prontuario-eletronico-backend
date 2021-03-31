const { edit } = require("../../repository/patient")

/**
 * 
 * @param {number} id 
 * @param {import('../../model/patient').Patient>}  patient 
 * @returns any
 */
const execute = async (id, patient)=>{
    return edit(id, patient)
}

module.exports = {
    execute
}