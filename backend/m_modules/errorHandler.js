module.exports = (err, req, res, next) => {
    console.log("error", err)
    console.log("req.response", req.response)
    let code = (typeof req.response.code === 'undefined') ? 500 : req.response.code
    let message = (typeof req.response.message === 'undefined') ? '' : req.response.message
    let data = (typeof req.response.data === 'undefined') ? {} : req.response.data
    res.status(code).json({
        error: true,
        success: false,
        message,
        data
    })
}