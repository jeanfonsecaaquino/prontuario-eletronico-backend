const { list, edit, create, remove } = require("../../controllers/patient")
const rootFolder = __dirname.split('/').pop();

/**
 * 
 * @param {import("express").Express} app 
 */
const loadRoute = (app) => {
    app.get(`/${rootFolder}`, list.bind(this))
    app.put(`/${rootFolder}/:id`, edit.bind(this))
    app.post(`/${rootFolder}`, create.bind(this))
    app.delete(`/${rootFolder}/:id`, remove.bind(this))
}

module.exports = {
    loadRoute
}