const { search, update, save, remove } = require("../repository/connection")
const observation = require("../model/observation")

/**
 * @returns {Array<import('../model/patient').Patient>} 
 */
const searchRepository = ()=>{
    return search(`SELECT * FROM ${observation.TABLE_NAME}`, observation)
}

/**
 * 
 * @param {number} id 
 * @param {import('../model/observation').Observation}  observationData 
 * @returns any
 */
const editRepository = (id, observationData)=>{
    return update(id, observationData, observation)
}

/**
 * 
 * @param {number} id 
 * @param {import('../model/observation').Observation} observationData
 * @returns any
 */
 const removeRepository = (id)=>{
    return remove(`DELETE FROM ${observation.TABLE_NAME} WHERE id = ${id}`, observation)
}

/**
 * 
 * @param {import('../model/observation').Observation>}  observationData
 * @returns any
 */
 const createRepository = (observationData)=>{
    return save(observationData, observation)
}

/**
 * @param {number} id
 * @returns {Array<import('../model/observation').Observation>} 
 */
 const searchByEncounter = (id)=>{
    return search(`SELECT * FROM ${observation.TABLE_NAME} WHERE id_encounter = ${id}`, observation)
}

module.exports = {
    searchRepository,
    editRepository,
    removeRepository,
    createRepository,
    searchByEncounter
}