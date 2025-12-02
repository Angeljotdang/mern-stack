
module.exports = (req, res, next) => {
    let message = (typeof req.response.message === 'undefined') ? "" : req.response.message
    let code = (typeof req.response.code === 'undefined') ? 200 : req.response.code
    let data = (typeof req.response.data === 'undefined') ? {} : req.response.data
    res.status(code || 200).json({
        error: false,
        success: true,
        message: message,
        data: data
    })
}