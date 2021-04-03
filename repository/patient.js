const { search, update, save, remove } = require("../repository/connection")
const patient = require("../model/patient")

/**
 * @returns {Array<import('../model/patient').Patient>} 
 */
const searchRepository = ()=>{
    return search(`SELECT * FROM ${patient.TABLE_NAME}`, patient)
}

/**
 * 
 * @param {number} id 
 * @param {import('../model/patient').Patient}  patientData 
 * @returns any
 */
const editRepository = (id, patientData)=>{
    return update(id, patientData, patient)
}

/**
 * 
 * @param {number} id 
 * @param {import('../model/patient').Patient}  patientData 
 * @returns any
 */
 const removeRepository = (id)=>{
    return remove(`DELETE FROM ${patient.TABLE_NAME} WHERE id = ${id}`, patient)
}

/**
 * 
 * @param {number} id 
 * @param {import('../model/patient').Patient>}  patient 
 * @returns any
 */
 const createRepository = (patientData)=>{
    return save(patientData, patient)
}

module.exports = {
    searchRepository,
    editRepository,
    removeRepository,
    createRepository
}