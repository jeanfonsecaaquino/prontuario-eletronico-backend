const { searchRepository } = require("../../repository/observation")

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