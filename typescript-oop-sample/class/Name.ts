import { IName } from "../interface/IName";

export class Name implements IName {
    prefix?: string;
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string, prefix: string = '') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.prefix = prefix;
    }

    getFullName(): string {
        return `${this.prefix ? this.prefix + ' ' : ''}${this.lastName} ${this.firstName}`;
    }
}
