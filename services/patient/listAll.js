const { searchRepository } = require("../../repository/patient")

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