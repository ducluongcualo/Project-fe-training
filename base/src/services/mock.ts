import { LoginBody, LoginDTO, LoginResponse } from "../shared/dto/login.dto";
import { DTO } from "../shared/dto/base.dto";
import { ResponseDTO } from "../shared/dto/base.dto";
import { SystemCode } from "../shared/business/system-code";

interface IMockData {
    url: string;
    handler: (request: DTO) => ResponseDTO<unknown>;
}

export const mockData: Array<IMockData> = [
    {
        url: LoginDTO.url,
        handler: (request) => {
            const body = request.body as LoginBody;
            if (body.email === "admin@bnksolution.com" && body.password === "asdf@1234") {
                return {
                    code: SystemCode.SUCCESS,
                    msg: "",
                    data: new LoginResponse("testToken"),
                };
            }
            throw new Error("Login failed");
        },
    },
];
