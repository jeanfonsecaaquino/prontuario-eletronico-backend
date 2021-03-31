
const { listAll, edit } = require('../../services/patient')

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
const listPatient = async (req, res, next) =>{
    const data = await listAll.execute()
    res.status(200).send(data)
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
 const editPatient = async (req, res, next) =>{
    const { id } = req.params;
    const payload = req.body;
    const data = await edit.execute(id, payload)
    res.status(200).send(data)
}

module.exports = {
    listPatient,
    editPatient
}