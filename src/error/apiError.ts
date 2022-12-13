class ApiError {
    code: number;
    message: string;
    constructor(code: number, message: string) {
        this.code = code;
        this.message = message;
    }

    static badRequest(msg: string) {
        return new ApiError(400, msg);
    }

    static unauthorized(msg: string) {
        return new ApiError(401, msg);
    }

    static notFound(msg: string) {
        return new ApiError(404, msg);
    }

    static tooManyRequests(msg: string) {
        return new ApiError(429, msg);
    }
}

export default ApiError;