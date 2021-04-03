const { searchByPatient } = require("../../repository/encounter")

/**
 * 
 * @returns 
 */
const execute = async (id)=>{
    return searchByPatient(id)
}

module.exports = {
    execute
}