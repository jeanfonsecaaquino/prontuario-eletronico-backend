const { search } = require("../repository/connection")
const patient = require("../model/patient")


const searchAll = ()=>{
    return search('SELECT * FROM PATIENT', patient)
}

module.exports = {
    searchAll
}