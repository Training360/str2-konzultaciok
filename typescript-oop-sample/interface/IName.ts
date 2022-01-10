export interface IName {
    prefix?: string;
    firstName: string;
    lastName: string;
    getFullName(): string;
}
