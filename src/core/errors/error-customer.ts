import { AppError } from "./app-error.ts";

export const ErrorCustomer = {
    EmptyName: () => new AppError("O nome do cliente não pode estar vazio.", 1001),
    EmptyAddress: () => new AppError("O endereço do cliente não pode estar vazio.", 1002),
};