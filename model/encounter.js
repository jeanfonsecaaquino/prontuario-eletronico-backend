const TABLE_NAME = "ENCOUNTER"
const { 
    bindUpdate: baseBindUpdate, bindCreate: baseBindCreate } = require('./baseModel')

/**
 * @typedef {Object} Encounter
 * @param    {number} id 
 * @property {string} id_patient
 * @property {Date} encounter_date
 * 
 * @param    {number} id 
 * @property {string} id_patient
 * @property {Date} encounter_date
 * @return {Encounter}
 */
const encounter = (id, id_patient, encounter_date) => ({
        id,
        id_patient,
        encounter_date
})

/**
 * 
 * @param {Array<any>} results 
 * @returns {Array<Encounter>}
 */
const bind = (results) => {
    const encounters = results.map(row => {
        const encounterRow = encounter(
            row?.id,
            row?.id_patient, 
            row?.encounter_date
        )
        return encounterRow
    })
    return encounters
}

/**
 * 
 * @param {Encounter} encounter 
 * @returns {Array<Encounter>}
 */
 const bindUpdate = (id, encounter) => {
    return baseBindUpdate(id, encounter, TABLE_NAME)
}

/**
 * @param {Encounter} data 
 */
const bindCreate = (data)=>{
    const encounter_date = new Date(data.encounter_date)
    const translatedData = { ...data, encounter_date}
    const stringQuery = baseBindCreate(TABLE_NAME)
    return { stringQuery, translatedData }
}

module.exports = {
    encounter,
    bind,
    bindUpdate,
    bindCreate,
    TABLE_NAME
}