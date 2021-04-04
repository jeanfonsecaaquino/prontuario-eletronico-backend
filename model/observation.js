const TABLE_NAME = "OBSERVATION"
const { 
    bindUpdate: baseBindUpdate, bindCreate: baseBindCreate } = require('./baseModel')

/**
 * @typedef {Object} Observation
 * @param    {number} id 
 * @property {number} id_encounter
 * @property {string} comment
 * 
 * @param    {number} id 
 * @property {number} id_encounter
 * @property {string} comment
 * @return {Observation}
 */
const observation = (id, id_encounter, comment) => ({
        id,
        id_encounter,
        comment
})

/**
 * 
 * @param {Array<any>} results 
 * @returns {Array<import('./encounter').Encounter>}
 */
const bind = (results) => {
    const observations = results.map(row => {
        const observationRow = observation(
            row?.id,
            row?.id_encounter, 
            row?.comment
        )
        return observationRow
    })
    return observations
}

/**
 * 
 * @param {Observation} observation 
 * @returns {Array<Observation>}
 */
 const bindUpdate = (id, observation) => {
    return baseBindUpdate(id, observation, TABLE_NAME)
}

/**
 * @param {Observation} data 
 */
const bindCreate = (data)=>{
    const stringQuery = baseBindCreate(TABLE_NAME)
    return { stringQuery, translatedData: data }
}

module.exports = {
    observation,
    bind,
    bindUpdate,
    bindCreate,
    TABLE_NAME
}