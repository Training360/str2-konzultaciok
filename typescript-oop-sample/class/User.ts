import { IUser } from "../interface/IUser";
import { Name } from "./Name";

export class User implements IUser {
    [key: string]: any;
    id: number = 0;
    name: Name = new Name('', '');
    email: string = '';
    role: string = '';
    address: string = '';
    active?: boolean = true;

    constructor(options: User) {
        for (const key of Object.keys(options)) {
            this[key] = options[key];
        }
    }
}