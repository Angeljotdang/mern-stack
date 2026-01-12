let login = require('../model/login')

module.exports.create = async (data) => {
    try {
        return await login.insertMany(data)
    } catch (error) {
        throw error
    }
}
module.exports.create = async (data) => {
    try {
        return await login.create(data)
    } catch (err) {
        throw err
    }
}

module.exports.findById = async (_id, filter) => {
    try {
        return await login.findById(_id, filter)
    }
    catch (error) {
        throw error
    }
}
module.exports.fetch = async (filter) => {
    try {
        console.log("filter", filter)
        // return await login.find(filter, { _id: 0 }, { limit: 3 })
        return await login.find(filter, { _id: 0 })
    } catch (error) {
        throw error
    }
}
module.exports.findByIdAndDelete = async (_id) => {
    try {
        return await login.findByIdAndDelete(_id)
    } catch (error) {
        throw error
    }
}

module.exports.findByIdAndUpdate = async (_id, data) => {
    try {
        console.log("id", _id)
        const updated = await login.findByIdAndUpdate(_id, { $set: { data } }, { new: true, upsert: true, runValidators: true, select: 'description completed' })
        console.log("updated", updated)
        return updated
    }
    catch (error) {
        throw error
    }
}
module.exports.findOneAndUpdate = async (filter, update) => {
    try {
        //  console.log("id", _id)
        const updated = await login.findOneAndUpdate(filter, update, { new: true, upsert: true, runValidators: true, select: 'description completed' })
        console.log("updated", updated)
        return updated
    }
    catch (error) {
        throw error
    }
}

module.exports.findOneAndDelete = async (filter) => {
    const deleted = await login.findOneAndDelete(filter)
    return deleted

}

module.exports.findOne = async (filter) => {
    const record = await login.findOne(filter).lean()
    return record
}