import { action, observable } from "mobx";
import { User } from "shared/business/user";
import { ResponseDTO } from "shared/dto/base.dto";
import { ForgotPassDTO, ForgotPassResponse } from "shared/dto/forgot-pass.dto";
import { LoginDTO, LoginResponse } from "shared/dto/login.dto";
import { ResetPassDTO, ResetPassResponse } from "shared/dto/reset-pass.dto";
import Container, { Service } from "typedi";
import { HttpService } from "./http.service";

export const USER_KEY = "user";
export const USER_ACCESS_TOKEN = "access_token";

@Service()
export class AuthService {
	@observable
	private user?: User;

	private httpService = Container.get(HttpService);

	public constructor() {
		const user = localStorage.getItem("user");
		if (user) {
			this.user = JSON.parse(user);
		}
	}

	@action.bound
	public setUser(user: Partial<User>): void {
		if (this.user) {
			this.user = { ...this.user, ...user };
		}
	}

	public async signIn(loginDTO: LoginDTO): Promise<LoginResponse> {
		const { data } = await this.httpService.request(loginDTO);
		localStorage.setItem(USER_ACCESS_TOKEN, data.access_token);
		return data;
	}

	public async getForgotPass(
		forgotPassDTO: ForgotPassDTO
	): Promise<ResponseDTO<ForgotPassResponse>> {
		return this.httpService.request(forgotPassDTO);
	}

	public async getResetPass(resetPassDTO: ResetPassDTO): Promise<ResponseDTO<ResetPassResponse>> {
		return this.httpService.request(resetPassDTO);
	}
}
