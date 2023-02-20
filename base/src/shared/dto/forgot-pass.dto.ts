import { DTO } from "./base.dto";
import { METHOD } from "constants/http";

export class ForgotPassParam {
    public agentCode!: string;
}

export class ForgotPassResponse {
    public data!: string;
}

export class ForgotPassDTO extends DTO {
    public body: undefined;
    public url = "/forgot-password";
    public method = METHOD.POST;
    public readonly responseClass = ForgotPassResponse;
    public query: undefined;

    constructor(public param: ForgotPassParam) {
        super();
    }
}
