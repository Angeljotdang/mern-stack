const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/amazonClone")

const mongodb = mongoose.connection
mongodb.on("connected", function () {
    console.log("connected")
})
mongodb.on("error", function (err) {
    console.log("error " + err)
})
mongodb.on("disconnected", function () {
    console.log("disconnected")
})
