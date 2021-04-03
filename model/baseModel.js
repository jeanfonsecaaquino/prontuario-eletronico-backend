/**
 * 
 * @param {Object} model 
 * @returns {Array<Object>}
 */
 const bindUpdate = (id, model, TABLE_NAME) => {
    var stringTemplate = `UPDATE ${TABLE_NAME} SET `
    const keys = Object.keys(model)
    const values = Object.values(model)
    const updatefields = keys.map( key =>`${key} = ?`)
    const stringQuery = `${stringTemplate} ${updatefields.join(',')} WHERE id = ?`
    values.push(id)
    return { stringQuery, values }
}

const bindCreate = (TABLE_NAME)=>{
    return `INSERT INTO ${TABLE_NAME} SET ?`
}

module.exports = {
    bindUpdate,
    bindCreate
}