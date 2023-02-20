export enum ROLE_NAME {
    SUPER_ADMIN = "SUPER_ADMIN",
    BANCAS_ADMIN = "BANCAS_ADMIN",
    AGENCY_ADMIN = "AGENCY_ADMIN",
}

export enum USER_PERMISSION {}

export class User {
    firstName: string;
    lastName: string;
    constructor(data: { firstName: string; lastName: string; password: string }) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
    }
}
