import { DTO } from "./base.dto";
import { METHOD } from "constants/http";

export class LoginBody {
	public email!: string;
	public password!: string;
}

export class LoginResponse {
	public constructor(public access_token: string) {}
}

export class LoginDTO extends DTO {
	public static url = "/login";
	public url = LoginDTO.url;
	public method = METHOD.POST;
	public readonly responseClass = LoginResponse;
	public query: undefined;

	constructor(public body: LoginBody) {
		super();
	}
}
