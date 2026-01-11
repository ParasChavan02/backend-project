import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { CustomError } from '../errors/custom-error'; // A custom error class (see below)

export const errorHandler: ErrorRequestHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Log the error for debugging purposes
    console.error(err);

    if (err instanceof CustomError) {
        // Handle custom, trusted errors (e.g., specific HTTP errors)
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }

    // Handle all other unhandled/generic errors with a generic message
    res.status(500).send({
        errors: [{ message: 'Something went wrong' }],
    });
};
