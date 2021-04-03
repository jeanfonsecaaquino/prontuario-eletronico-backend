const TABLE_NAME = "PATIENT"
const { 
    bindUpdate: baseBindUpdate, bindCreate: baseBindCreate } = require('./baseModel')

/**
 * @typedef {Object} Patient
 * @param    {number} id 
 * @property {string} name
 * @property {Date} birthdate
 * @property {string} gender
 * @property {string} name
 * @property {string} phone
 * @property {number} weight
 * @property {number} height
 * 
* @param   {number} id 
 * @param  {string} name 
 * @param  {Date} birthdate 
 * @param  {string} gender 
 * @param  {string} phone 
 * @param  {number} weight 
 * @param  {number} height
 * @return {Patient}
 */
const patient = (id, name, birthdate, gender, phone, weight, height) => ({
        id,
        name,
        birthdate,
        gender,
        phone,
        weight,
        height
})

/**
 * 
 * @param {Array<any>} results 
 * @returns {Array<Patient>}
 */
const bind = (results) => {
    const patients = results.map(row => {
        const patientRow = patient(
            row?.id,
            row?.name, 
            row?.birthdate, 
            row?.gender, 
            row?.phone, 
            row?.weight, 
            row?.height
        )
        return patientRow
    })
    return patients
}

/**
 * 
 * @param {Patient} patient 
 * @returns {Array<Patient>}
 */
 const bindUpdate = (id, patient) => {
    return baseBindUpdate(id, patient, TABLE_NAME)
}

/**
 * @param {Patient} data 
 */
const bindCreate = (data)=>{
    const birthdate = new Date(data.birthdate)
    const translatedData = { ...data, birthdate}
    const stringQuery = baseBindCreate(TABLE_NAME)
    return { stringQuery, translatedData }
}

module.exports = {
    patient,
    bind,
    bindUpdate,
    bindCreate,
    TABLE_NAME
}