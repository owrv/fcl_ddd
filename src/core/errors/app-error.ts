export class AppError extends Error {
    constructor(
        public message: string,
        public code?: number,
        public status: number = 400
    ) {
        super(message);
        this.name = this.constructor.name;
    }
}