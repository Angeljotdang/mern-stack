const loginRouter = require('./login')
const routes = [{
    path: "/login",
    router: loginRouter
}]
console.log("routes", routes)

//containing all routes of task
module.exports = routes