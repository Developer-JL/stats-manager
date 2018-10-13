import { Team } from "./team.model";

export class User {
    _id?: string;
    email: string;
    password: string;
    teams?: Team[];
}