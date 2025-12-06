export class Address {

    _street: string;
    _city: string
    _zipCode: string;
    _number: number;
    
    constructor(street: string, city: string, zipCode: string, number: number) {
        this._street = street;
        this._city = city;
        this._zipCode = zipCode;
        this._number = number;
        this.validate();
    }

    validate(): void {
        if(this._street.length === 0) {
            throw new Error("Street is required");
        }
        if(this._city.length === 0) {
            throw new Error("City is required");
        }
        if(this._zipCode.length === 0) {
            throw new Error("ZipCode is required");
        }
        if(this._number <= 0) {
            throw new Error("Number must be greater than zero");
        }
    }
}

