class ApiError extends Error {

    constructor(msg, statusCode) {
        super(msg)
        this.statusCode = statusCode;
    }

}

module.exports = ApiError;