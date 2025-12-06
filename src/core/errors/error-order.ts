import { AppError } from "./app-error.ts";

export const ErrorOrder = {
    EmptyItems: () => new AppError("A ordem deve ter pelo menos um item.", 2001),
    InvalidCustomerId: () => new AppError("O ID do cliente é inválido.", 2002),
};