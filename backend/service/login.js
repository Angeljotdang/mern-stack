const loginRepo = require('../repository/login')
const bcrypt = require('bcrypt')

const hashPassword = async (pass) => {
    return await bcrypt.hash(pass, 10)
}
module.exports.login = async (req) => {
    try {
        console.log("req body", req.body.email)
        const { email, phoneNumber } = req.body
        if (!email && !phoneNumber) {
            console.log("Either email or phone is missing")
            const err = new Error("Either email or phone is missing")
            req.response.code = 400
            req.response.message = 'Please check the payload'
            return req.response
        }
        else {
            console.log("hey")
            let records
            if (email) {
                console.log("email foundd")
                records = await loginRepo.findOne({ email: email })

            }
            else {
                console.log("phone found")
                records = await loginRepo.findOne({ phoneNumber })
            }
            if (!req.body.login && !req.body._id && req.body.password) {
                const hashedPassword = await hashPassword(req.body.password)
                records = await loginRepo.create({ email, phoneNumber, password: hashedPassword })

                //  const isMatch=bcrypt.compare(this.password,user.password)
            }
            else {
                if (req.body.password) {
                    records = await loginRepo.findById(req.body._id, { password: 1, email: 1, phoneNumber: 1 })
                    //   const hashedPassword = await hashPassword(req.body.password)
                    const isMatch = await bcrypt.compare(req.body.password, records.password.trim())
                    records.passMatched = isMatch
                    console.log("recordsssssssssssssssssssss", records)

                    console.log("isMatched", isMatch, records.password, req.body.password)
                    if (!isMatch) {
                        req.response.code = 400
                        // req.response.message="Password is incorrect. Please enter a correct password"
                        throw new Error("Password is incorrect. Please enter a correct password")

                        // req.response.code = 400
                        // req.response.message = 
                        // req.response.data = {}
                    }

                }

            }
            req.response.message = 'Success'
            req.response.code = 200
            req.response.data = records
            return req.response
        }
    }
    catch (err) {
        console.log("errorrrrrrrrrrrrrrrrrr", err)
        req.response.message = err.message
        throw (err)
    }

}

module.exports.password = async (req) => {
    try {
        const { email, password } = req.body

    } catch (err) {

    }
}