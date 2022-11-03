export interface CustomerRequest {
    firstName: string,
    lastName: string,
    mobileNumber : string,
    email : string
}

// TODO: Remove this.
export interface CustomerTypeKVP {
    id: number,
    name: string
}

export interface Customer {
    id : string,
    name: string,
    mobileNumber? : string,
    email? : string
}