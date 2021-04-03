
const { listService, editService, createService, removeService } = require('../../services/patient')

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
const list = async (req, res, next) =>{
    const data = await listService.execute()
    res.status(200).send(data)
    return next()
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
 const edit = async (req, res, next) =>{
    const { id } = req.params;
    const payload = req.body;
    const data = await editService.execute(id, payload)
    res.status(200).send(data)
    return next()
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
 const create = async (req, res, next) =>{
    const payload = req.body;
    const data = await createService.execute(payload)
    res.status(200).send(data)
    return next()
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
 const remove = async (req, res, next) =>{
    const { id } = req.params;
    const data = await removeService.execute(id)
    res.status(200).send(data)
    return next()
}

module.exports = {
    list,
    edit,
    create,
    remove
}