const loginService = require('../service/login')

module.exports.login = async (req, res, next) => {
    try {
        console.log("heyyyyyyyyyyyy")
        console.log("here it isssssssssssssssssssss", req.body)
        await loginService.login(req)
        next()

    } catch (err) {
        console.log("ooopsssss ")
        next(err)

    }
}

// module.exports.fetch = async (req, res, next) => {
//     try {
//         console.log("fetchhhhhhhhhhhhhhhhhhhhhhhhhh")
//         console.log("URL:", req.url);  // Add this line

//         await taskservice.getAll(req)
//         next()

//         // await taskservice.getAll(req)
//     }
//     catch (error) {
//         next(error)
//     }
// }