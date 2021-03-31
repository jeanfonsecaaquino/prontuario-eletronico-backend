const { listPatient, editPatient } = require("../../controllers/patient")
const rootFolder = __dirname.split('/').pop();

/**
 * 
 * @param {import("express").Express} app 
 */
const loadRoute = (app) => {
    app.get(`/${rootFolder}`, listPatient.bind(this))
    app.put(`/${rootFolder}/:id`, editPatient.bind(this))
}

module.exports = {
    loadRoute
}