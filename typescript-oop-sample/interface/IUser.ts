import { Name } from "../class/Name";

export interface IUser {
    id: number;
    name: Name;
    address: string;
    email: string;
    role: string;
    active?: boolean;
}