const express = require('express')
const app = express()
const routers = require('./router')
const responseHandler = require('./m_modules/responseHandler')
require('./database/mongo')
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:5173'
}
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use((req, res, next) => {
    req.response = {}
    req.options = req.query.options || {}
    next()
})

routers.forEach(route => {
    const { path, router } = { ...route }
    console.log("path", path)
    app.use(`/amazonClone${path}`, cors(corsOptions), router)
    console.log(`amazonClone${path}`)
});
app.use(responseHandler)

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send('Something went wrong')

})

app.listen(8000, () => console.log("Server is up"))
module.exports = app