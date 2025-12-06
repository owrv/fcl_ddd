import { AppError } from "../../core/errors/app-error.js";

export function errorHandler(
    err: Error,
) {
    if (err instanceof AppError) {
        return {
            message: err.message,
            code: err.code,
            status: err.status,
        };
    }
    
    return {
        message: "Internal Server Error",
        status: 500,
    };
}