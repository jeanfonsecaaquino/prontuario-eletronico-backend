const { list, edit, create, remove, listByPatient } = require("../../controllers/encounter")
const rootFolder = __dirname.split('/').pop();

/**
 * 
 * @param {import("express").Express} app 
 */
const loadRoute = (app) => {
    app.get(`/${rootFolder}`, list.bind(this))
    app.get(`/${rootFolder}/patients/:id`, listByPatient.bind(this))
    app.put(`/${rootFolder}/:id`, edit.bind(this))
    app.post(`/${rootFolder}`, create.bind(this))
    app.delete(`/${rootFolder}/:id`, remove.bind(this))
}

module.exports = {
    loadRoute
}