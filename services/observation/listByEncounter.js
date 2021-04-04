const { searchByEncounter } = require("../../repository/observation")

/**
 * 
 * @returns 
 */
const execute = async (id)=>{
    return searchByEncounter(id)
}

module.exports = {
    execute
}