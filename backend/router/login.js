const express=require('express')
const router=new express.Router()
const loginController=require('../controllers/login')

router.post('/mobileEmail',loginController.login)
router.post('/password',loginController.password)

//console.log("router", router)
module.exports = router
