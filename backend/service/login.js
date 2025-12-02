const loginRepo = require('../repository/login')


module.exports.login = async (req) => {
    try {
        console.log("req body", req.body.email)
        if (!req.body.email && !req.body.phone) {
            console.log("Either email or phone is missing")
            const err = new Error("Either email or phone is missing")
            req.response.code = 400
            req.response.message = 'Please check the payload'
            return req.response
        }
        else {
            console.log("hey")
            let records
            if (req.body.email) {
                console.log("email foundd")
                records = await loginRepo.findOne({ email: req.body.email })
                req.session.email = req.body.email
                req.session.phone = null
            }
            else {
                console.log("phone found")
                records = await loginRepo.findOne({ phoneNumber: req.body.phone })
                req.session.phone = req.body.phone
                req.session.email = null
            }
            req.response.code = 200
            req.response.message = `${records ? "1 " : "0 "}Record found`
            req.response.data = records
            return req.response
        }
    }
    catch (err) {
        throw (err)
    }

}