import axios from "axios";
import { Service } from "typedi";
import { API_HOST } from "../environment/environment";
import { DTO, ResponseDTO } from "../shared/dto/base.dto";
import { USER_KEY } from "./auth.service";
import { mockData } from "./mock";
import { delay } from "../util/date-time.util";

// import jwtDecode from 'jwt-decode';
@Service()
export class HttpService {
    private token: string | null;

    constructor() {
        this.token = localStorage.getItem(USER_KEY);
        axios.interceptors.response.use((response) => {
            // TODO: handle token;
            return response;
        });
    }

    public get tokenInfo(): string | null {
        return this.token;
    }

    public async request<T extends DTO>(dto: T): Promise<ResponseDTO<InstanceType<T["responseClass"]>>> {
        const mockRequest = mockData.find((item) => item.url === dto.url);
        if (mockRequest) {
            await delay(1);
            const rs = mockRequest.handler(dto) as ResponseDTO<InstanceType<T["responseClass"]>>;
            if (rs.data.access_token) {
                this.token = rs.data.access_token;
            }
            return rs;
        }

        const response = await axios({
            method: dto.method,
            headers: { Authorization: "Bearer " + this.token },
            baseURL: API_HOST,
            url: dto.url,
            data: dto.body,
            params: dto.query,
        });
        return response.data as ResponseDTO<InstanceType<T["responseClass"]>>;
    }
}
