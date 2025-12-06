const { v4: uuid } = require("uuid");
import type { UUID } from "crypto";
// import Address from "./address";

import { ErrorCustomer } from "../../core/errors/error-customer.ts";

class Customer {
    private _id: UUID;
    private _name: string
    private _address: string;
    
    constructor(name: string, address: string) {
        this._id = uuid();
        this._name = name;
        this._address = address;
    }
    
    validate(): void {
        if(this._name.length === 0 || this._name.length < 3) {
            throw ErrorCustomer.EmptyName();
        }
        if(this._address.length === 0 || this._address.length < 3) {
            throw ErrorCustomer.EmptyAddress();
        }
    }

    changeName(name: string): void {
        this._name = name;
        this.validate();
    }

    changeAddress(address: string): void {
        this._address = address;
        this.validate();
    }

    get name(): string {
        return this._name;
    }

    get address(): string {
        return this._address;
    }
}

export default Customer;