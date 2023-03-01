const { CustomAPIError } = require('../errors/custom-error')

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.status).json({msg: err.message});
    }
    return res.status(500).json({err: 'Something went wrong'});
}

module.exports = errorHandler;
