const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        sparse: true,
        trim: true,
        lowercase: true

    },
    phoneNumber: {
        type: String,
        unique: true,
        trim: true,
        sparse: true
        //can allow sparse values if entered email id
    },
    password: {
        type: String,
        required: true
    }

},
    {timestamps: true})
const User = mongoose.model('User', UserSchema)
module.exports = User