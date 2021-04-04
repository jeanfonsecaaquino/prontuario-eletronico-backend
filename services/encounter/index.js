const listService = require('./listAll')
const editService = require('./edit')
const createService = require('./create')
const removeService = require('./remove')
const listByPatientService = require('./listByPatient')

module.exports = {
    listService,
    editService,
    createService,
    removeService,
    listByPatientService
}