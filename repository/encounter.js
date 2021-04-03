const { search, update, save, remove } = require("../repository/connection")
const encounter = require("../model/encounter")

/**
 * @returns {Array<import('../model/patient').Patient>} 
 */
const searchRepository = ()=>{
    return search(`SELECT * FROM ${encounter.TABLE_NAME}`, encounter)
}

/**
 * 
 * @param {number} id 
 * @param {import('../model/encounter').Encounter}  encounterData 
 * @returns any
 */
const editRepository = (id, encounterData)=>{
    return update(id, encounterData, encounter)
}

/**
 * 
 * @param {number} id 
 * @param {import('../model/encounter').Encounter} encounterData
 * @returns any
 */
 const removeRepository = (id)=>{
    return remove(`DELETE FROM ${encounter.TABLE_NAME} WHERE id = ${id}`, encounter)
}

/**
 * 
 * @param {import('../model/encounter').Encounter>}  encounterData
 * @returns any
 */
 const createRepository = (encounterData)=>{
    return save(encounterData, encounter)
}

module.exports = {
    searchRepository,
    editRepository,
    removeRepository,
    createRepository
}