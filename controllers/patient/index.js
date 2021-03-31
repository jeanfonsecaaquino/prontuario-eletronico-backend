
const { listAll } = require('../../services/patient')

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
const listPatient = async (req, res, next) =>{
    const data = await listAll.execute()
    res.send(200, data)
}

module.exports = {
    listPatient
}