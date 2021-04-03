const { searchRepository } = require("../../repository/encounter")

/**
 * 
 * @returns 
 */
const execute = async ()=>{
    return searchRepository()
}

module.exports = {
    execute
}