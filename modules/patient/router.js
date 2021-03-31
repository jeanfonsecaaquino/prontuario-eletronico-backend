const { listPatient } = require("../../controllers/patient")
const rootFolder = __dirname.split('/').pop();

const loadRoute = (app) => {
    app.get(`/${rootFolder}/listPatient`, listPatient.bind(this))
}

module.exports = {
    loadRoute
}