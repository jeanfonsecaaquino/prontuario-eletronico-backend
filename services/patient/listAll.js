const { searchAll } = require("../../repository/patient")

/**
 * 
 * @returns 
 */
const execute = async ()=>{
    return searchAll()
}

module.exports = {
    execute
}