import { DTO } from "./base.dto";
import { METHOD } from "constants/http";

export class ResetPassQuery {
    public password!: string;
    public token!: string;
}

export class ResetPassResponse {
    public message!: string;
    public timestamp!: string;
}

export class ResetPassDTO extends DTO {
    public param: undefined;
    public url = "reset-password";
    public method = METHOD.POST;
    public readonly responseClass = ResetPassResponse;
    public query: undefined;
    constructor(public body: ResetPassQuery) {
        super();
    }
}
