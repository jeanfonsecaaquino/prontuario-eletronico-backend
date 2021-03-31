const { search, update } = require("../repository/connection")
const patient = require("../model/patient")


const searchAll = ()=>{
    return search('SELECT * FROM PATIENT', patient)
}

/**
 * 
 * @param {number} id 
 * @param {import('../model/patient').Patient>}  patient 
 * @returns any
 */
const edit = (id, patientData)=>{
    return update(id, patientData, patient)
}

module.exports = {
    searchAll,
    edit
}