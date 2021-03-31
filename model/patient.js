/**
 * @typedef {Object} Patient
 * @property {string} name
 * @property {Date} birthdate
 * @property {string} gender
 * @property {string} name
 * @property {string} phone
 * @property {number} weight
 * @property {number} height
 * 
 *  
 * @param {integet} name 
 * @param {Date} birthdate 
 * @param {string} gender 
 * @param {string} phone 
 * @param {number} weight 
 * @param {number} height
 * @return {Patient}
 */
const patient = (name, birthdate, gender, phone, weight, height) => ({
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

module.exports = {
    patient,
    bind
}