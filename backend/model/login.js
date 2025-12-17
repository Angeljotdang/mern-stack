const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        sparse: true,
        trim: true,
        lowercase: true

    },
    phoneNumber: {
        type: String,
        trim: true,
        sparse: true //allowed nulls
        //can allow sparse values if entered email id
    },
    password: {
        type: String,
        required: true
    }

},
    { timestamps: true })

UserSchema.index({ email: 1, phoneNumber: 1 }, { unique: true, sparse: true })
const User = mongoose.model('User', UserSchema)

module.exports = User